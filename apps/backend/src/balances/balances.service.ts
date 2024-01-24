import { PrismaService } from "@/prisma/prisma.service";
import { HttpException, Injectable } from "@nestjs/common";

@Injectable()
export class BalancesService {
    constructor(private prisma: PrismaService) {}

    async getBalances(jwt: any) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: jwt.sub,
                },
                include: {
                    balance: {
                        select: {
                            balance: true,
                            expense: true,
                            income: true,
                        },
                    },
                },
            });

            if (!user) {
                throw new HttpException("Usuario não encontrado", 404);
            }

            return user.balance;
        } catch (error) {
            console.log(error);
            throw new HttpException("Erro ao buscar usuário", 500);
        }
    }

    async getBalancesFullData(jwt: any) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: jwt.sub,
                },
                include: {
                    balance: true,
                },
            });

            if (!user) {
                throw new HttpException("Usuario não encontrado", 404);
            }

            return user.balance;
        } catch (error) {
            console.log(error);
            throw new HttpException("Erro ao buscar usuário", 500);
        }
    }
}
