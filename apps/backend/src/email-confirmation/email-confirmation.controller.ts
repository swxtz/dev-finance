import { Body, Controller, Post, UsePipes } from "@nestjs/common";
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

    @Post("confirm")
    @UsePipes(new ZodValidationPipe(ConfirmEmailSchema))
    async confirmEmail(@Body() data: ConfirmEmailSchema) {
        return this.emailConfirmationService.confirmEmail(data);
    }
}
