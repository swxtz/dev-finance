import { Injectable } from "@nestjs/common";
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

        return transaction;
    }

    findAll() {
        return `This action returns all transactions`;
    }

    findOne(id: number) {
        return `This action returns a #${id} transaction`;
    }

    update(id: number, updateTransactionDto: UpdateTransactionDto) {
        return `This action updates a #${id} transaction`;
    }

    remove(id: number) {
        return `This action removes a #${id} transaction`;
    }
}
