import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const schema = z.object({
    name: z.string().min(2).max(255),
    amount: z.number().min(0),
    description: z.string().min(2).max(255),
    date: z.string().min(2).max(255),
    type: z.enum(["INCOME", "EXPENSE"]),
});

export class CreateTransactionDto extends createZodDto(schema) {}
