import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { IEmailConfirmaionPayload } from "./interface/email-confirmaion-payload";

@Injectable()
export class EmailConfirmationService {
    constructor(
        private prisma: PrismaService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {}
    async confirmEmail(token: string) {
        try {
            const payload: IEmailConfirmaionPayload | null =
                await this.jwtService.verifyAsync(token, {
                    secret: this.configService.get("JWT_SECRET"),
                });

            if (!payload) {
                throw new Error("Invalid token");
            }

            const user = await this.prisma.user.findUnique({
                where: {
                    email: payload.email,
                },
                select: {
                    emailConfirmed: true,
                },
            });

            if (user?.emailConfirmed) {
                throw new BadRequestException("E-mail já confirmado");
            }

            await this.prisma.user.update({
                where: {
                    email: payload.email,
                },
                data: {
                    emailConfirmed: true,
                },
            });

            return {
                message: "E-mail confirmado com sucesso",
            };
        } catch (err) {
            if (err?.name === "TokenExpiredError") {
                throw new BadRequestException(
                    "Token de confirmação expirado, por favor, solicite um novo",
                );
            }

            console.error(err);
            return err;
        }
    }
}
