import { PrismaService } from "@/prisma/prisma.service";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dtos/signin-dtos";
import * as argon from "argon2";

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
    ) {}

    async SignIn(data: SignInDto) {
        const verifyUser = await this.prisma.user.findUnique({
            where: {
                email: data.email,
            },
            select: {
                id: true,
                email: true,
                passwordHash: true,
            },
        });

        if (!verifyUser) {
            throw new HttpException(
                "Email ou Senha invalidas",
                HttpStatus.BAD_REQUEST,
            );
        }

        const verifyPassword = await argon.verify(
            verifyUser.passwordHash,
            data.password,
        );

        if (!verifyPassword) {
            throw new HttpException(
                "Email ou Senha invalidas",
                HttpStatus.BAD_REQUEST,
            );
        }

        const user = await this.prisma.user.findUnique({
            where: {
                email: data.email,
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                avatarUrl: true,
                email: true,
                updatedAt: true,
                createdAt: true,
            },
        });

        const payload = {
            sub: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            avatarUrl: user.avatarUrl,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };

        return { token: await this.jwt.signAsync(payload) };
    }
}
