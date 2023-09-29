import { PrismaService } from "@/prisma/prisma.service";
import { HttpException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user-dtos";
import * as argon from "argon2";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

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
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                },
            });

            return { message: "Usuario criado com sucesso", user };
        } catch (err) {
            console.log(err);
            throw new HttpException(err, 500);
        }
    }

    async find() {
        try {
            const users = await this.prisma.user.findMany({
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                },
            });

            return users;
        } catch (err) {
            console.log(err);
            throw new HttpException(err, 500);
        }
    }

    // async update(id: string, data: CreateUserDto) {
    //     try {
    //         const user = await this.prisma.user.update({
    //             where: {
    //                 id,
    //             },
    //             data: {
    //                 firstName: data.firstName,
    //                 lastName: data.lastName,
    //                 email: data.email,
    //             },
    //             select: {
    //                 id: true,
    //                 firstName: true,
    //                 lastName: true,
    //                 email: true,
    //             },
    //         });

    //         return user;
    //     } catch (err) {
    //         console.log(err);
    //         throw new HttpException(err, 500);
    //     }
    // }
}
