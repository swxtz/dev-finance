import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { EmailsService } from "@/emails/emails.service";

@Module({
    controllers: [UsersController],
    providers: [UsersService, EmailsService],
})
export class UsersModule {}
