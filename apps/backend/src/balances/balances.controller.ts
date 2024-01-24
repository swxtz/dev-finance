import { Controller, Get, Headers, UseGuards } from "@nestjs/common";
import { BalancesService } from "./balances.service";
import { AuthGuard } from "@/auth/auth.guard";
import { UtilsService } from "@/utils/utils.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Balances")
@ApiBearerAuth()
@Controller("balance")
export class BalancesController {
    constructor(
        private readonly balancesService: BalancesService,
        private jwtUtils: UtilsService,
    ) {}

    @Get()
    @UseGuards(AuthGuard)
    async getBalances(@Headers("Authorization") jwt: any) {
        const token = this.jwtUtils.getToken(jwt);
        return await this.balancesService.getBalances(token);
    }

    @Get("full-data")
    @UseGuards(AuthGuard)
    async getBalanceFullData(@Headers("Authorization") jwt: any) {
        const token = this.jwtUtils.getToken(jwt);
        return await this.balancesService.getBalancesFullData(token);
    }
}
