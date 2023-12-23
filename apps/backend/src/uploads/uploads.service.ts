import { PrismaService } from "@/prisma/prisma.service";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { HttpException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UploadsService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly configService: ConfigService,
    ) {}

    private readonly s3Client = new S3Client({
        region: this.configService.getOrThrow("AWS_S3_REGION"),
        credentials: {
            accessKeyId: this.configService.getOrThrow("AWS_ACCESS_KEY"),
            secretAccessKey: this.configService.getOrThrow("AWS_SECRET_KEY"),
        },
    });

    async uploadFile(file: Buffer, token) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: token.id,
            },
            select: {
                firstName: true,
                lastName: true,
            },
        });

        if (!user) {
            throw new HttpException("Usuario não encontrado", 404);
        }

        const filename = `${user.firstName}-${user.lastName}.png`;

        await this.prisma.user.update({
            where: {
                id: token.id,
            },
            data: {
                avatarUrl: filename,
            },
        });

        await this.s3Client.send(
            new PutObjectCommand({
                Bucket: this.configService.getOrThrow("AWS_S3_BUCKET_NAME"),
                Key: filename,
                Body: file,
                ACL: "public-read",
            }),
        );
    }
}
