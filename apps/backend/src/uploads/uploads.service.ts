import { PrismaService } from "@/prisma/prisma.service";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Injectable } from "@nestjs/common";
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

    async uploadFile(filename: string, file: Buffer) {
        await this.s3Client.send(
            new PutObjectCommand({
                Bucket: this.configService.getOrThrow("AWS_S3_BUCKET_NAME"),
                Key: filename,
                Body: file,
            }),
        );
    }
}
