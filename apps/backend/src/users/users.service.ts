import { PrismaService } from "@/prisma/prisma.service";
import { HttpException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user-dtos";
import * as argon from "argon2";
import { EmailsService } from "@/emails/emails.service";
import { ConfigService } from "@nestjs/config";
import { IVerifyAccount } from "./dtos/verify-account";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        private emailsService: EmailsService,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
    ) {}

    async create(data: CreateUserDto) {
        const verifyUser = await this.prisma.user.findUnique({
            where: {
                email: data.email,
            },
        });

        if (verifyUser) {
            throw new HttpException("Esse email já existe", 400);
        }

        try {
            const user = await this.prisma.user.create({
                data: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    passwordHash: await argon.hash(data.password),

                    balance: {
                        create: {
                            emailOwner: data.email,
                            income: 0,
                            expense: 0,
                            balance: 0,
                        },
                    },
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                },
            });

            const token = this.jwtService.sign(
                { sub: user.id, email: user.email },
                {
                    expiresIn: 60 * 30,
                    secret: this.configService.get("JWT_SECRET"),
                },
            );

            const linkCallback = `${this.configService.get("CLIENT_URL")}/confirm-email?token=${token}`;

            // await this.emailsService.sendAccountVerificationEmail({
            //     code: user.verified.token,
            //     link: linkCallback,
            //     sendTo: user.email,
            //     name: user.firstName,
            // });

            console.log(linkCallback);

            return { message: "Usuario criado com sucesso", user };
        } catch (err) {
            console.log(err);
            throw new HttpException(err, 500);
        }
    }

    async find(data: any) {
        try {
            const users = await this.prisma.user.findUnique({
                where: {
                    id: data.sub,
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    avatarUrl: true,
                },
            });

            if (!users) {
                throw new HttpException("Usuario não encontrado", 404);
            }

            return users;
        } catch (err) {
            console.log(err);
            throw new HttpException(err, 500);
        }
    }

    async verifyAccount(data: IVerifyAccount) {
        try {
            const user = await this.prisma.user.findUnique({
                where: { email: data.email },
                select: {
                    verified: {
                        select: {
                            token: true,
                            verified: true,
                        },
                    },
                },
            });

            if (!user) {
                throw new HttpException("Usuario não encontrado", 404);
            }

            if (user.verified.verified) {
                throw new HttpException("Usuario já verificado", 400);
            }

            if (user.verified.token !== data.token) {
                throw new HttpException("Token invalido", 400);
            }

            await this.prisma.user.update({
                where: { email: data.email },
                data: {
                    verified: {
                        update: {
                            verified: true,
                            verifiedAt: new Date(),
                        },
                    },
                },
            });

            return { message: "Usuario verificado com sucesso" };
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}
