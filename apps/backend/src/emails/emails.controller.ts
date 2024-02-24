import { Controller, Get } from "@nestjs/common";
import { EmailsService } from "./emails.service";

@Controller("emails")
export class EmailsController {
    constructor(private readonly emailsService: EmailsService) {}

    @Get()
    async sendAccountVerificationEmail() {
        return this.emailsService.sendAccountVerificationEmail();
    }
}
