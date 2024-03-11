import { HttpException, Injectable } from "@nestjs/common";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";
import { PrismaService } from "@/prisma/prisma.service";

@Injectable()
export class TransactionsService {
    constructor(private prisma: PrismaService) {}

    async create(createTransactionDto: CreateTransactionDto, token: any) {
        const transaction = await this.prisma.transaction.create({
            data: {
                ownerId: token.sub,
                amount: createTransactionDto.amount,
                description: createTransactionDto.description,
                type: createTransactionDto.type,
                name: createTransactionDto.name,
                date: createTransactionDto.date,
            },
        });

        if (transaction.type === "INCOME") {
            const user = await this.prisma.user.findUnique({
                where: { id: token.sub },
                select: { balance: true },
            });

            const newIncome = user.balance.income + transaction.amount;

            await this.prisma.user.update({
                where: { id: token.sub },
                data: {
                    balance: {
                        update: {
                            income: newIncome,
                            balance: user.balance.balance + transaction.amount,
                        },
                    },
                },
            });
        }

        if (transaction.type === "EXPENSE") {
            const user = await this.prisma.user.findUnique({
                where: { id: token.sub },
                select: { balance: true },
            });

            const newExpense = user.balance.expense + transaction.amount;

            await this.prisma.user.update({
                where: { id: token.sub },
                data: {
                    balance: {
                        update: {
                            expense: newExpense,
                            balance: user.balance.balance - transaction.amount,
                        },
                    },
                },
            });
        }
        return transaction;
    }

    async findAllWithLimits(token: any, limits: number) {
        const verifyUser = await this.prisma.user.findUnique({
            where: { id: token.sub },
            select: { id: true },
        });

        if (!verifyUser) {
            throw new HttpException("Unauthorized", 401);
        }

        const transactions = await this.prisma.transaction.findMany({
            where: { ownerId: token.sub },
            take: Number(limits),
            orderBy: { date: "desc" },
            select: {
                description: true,
                amount: true,
                date: true,
            },
        });

        return transactions;
    }

    async findAll(token: any) {
        const isAdmin = await this.prisma.user.findUnique({
            where: { id: token.sub },
            select: { userType: true },
        });

        if (
            isAdmin.userType[0] === "ADMIN" ||
            isAdmin.userType[1] === "ADMIN" ||
            isAdmin.userType[2] === "ADMIN"
        ) {
            const transactions = await this.prisma.transaction.findMany({
                include: {
                    owner: {
                        select: {
                            id: true,
                            email: true,
                            firstName: true,
                            lastName: true,
                            userType: true,
                        },
                    },
                },
            });

            return transactions;
        }
        throw new HttpException("Unauthorized", 401);
    }

    async findAllByUser(token: any) {
        const verifyUser = await this.prisma.user.findUnique({
            where: { id: token.sub },
            select: { id: true },
        });

        if (!verifyUser) {
            throw new HttpException("Unauthorized", 401);
        }

        const transactions = await this.prisma.transaction.findMany({
            where: { ownerId: token.sub },
            select: {
                description: true,
                amount: true,
                date: true,
            },
        });

        return transactions;
    }

    async findByUserTable(token: any) {
        const verifyUser = await this.prisma.user.findUnique({
            where: { id: token.sub },
            select: { id: true },
        });

        if (!verifyUser) {
            throw new HttpException("Unauthorized", 401);
        }

        const transactions = await this.prisma.transaction.findMany({
            where: { ownerId: token.sub },
            select: {
                description: true,
                amount: true,
                date: true,
            },
        });

        return transactions;
    }

    findOne(id: number) {
        return `This action returns a #${id} transaction`;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(id: number, updateTransactionDto: UpdateTransactionDto) {
        return `This action updates a #${id} transaction`;
    }

    async remove(id: string, token: any) {
        const verifyUser = await this.prisma.user.findUnique({
            where: { id: token.sub },
            select: { id: true },
        });

        if (!verifyUser) {
            throw new HttpException("Unauthorized", 401);
        }

        const verifyTransaction = await this.prisma.transaction.findUnique({
            where: { id: id },
        });

        if (!verifyTransaction) {
            throw new HttpException("Transaction not found", 404);
        }

        const transaction = await this.prisma.transaction.delete({
            where: { id: id },
        });

        return transaction;
    }
}
