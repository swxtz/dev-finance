import { Controller } from "@nestjs/common";
import { EmailsService } from "./emails.service";
import { Throttle } from "@nestjs/throttler";

@Throttle({ default: { limit: 3, ttl: 600 } })
@Controller("emails")
export class EmailsController {
    constructor(private readonly emailsService: EmailsService) {}
}
