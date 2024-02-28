import { Body, Controller, Post, UsePipes, Get, Param } from "@nestjs/common";
import { EmailConfirmationService } from "./email-confirmation.service";
import { ConfirmEmailSchema } from "./schemas/confirm-email";
import { ZodValidationPipe } from "nestjs-zod";
import { UtilsService } from "@/utils/utils.service";

@Controller("email-confirmation")
export class EmailConfirmationController {
    constructor(
        private readonly emailConfirmationService: EmailConfirmationService,
        private jwtUtils: UtilsService,
    ) {}

    @Get("confirm/:token")
    async confirmEmail(@Param("token") token) {
        return this.emailConfirmationService.confirmEmail(token);
    }
}
