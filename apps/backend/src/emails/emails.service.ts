import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { CreateEmailDto } from "./dtos/create-email";

@Injectable()
export class EmailsService {
    constructor(private prisma: PrismaService) {}
    sendAccountVerificationEmail({ code, email }: CreateEmailDto) {
        console.log();
    }
}
