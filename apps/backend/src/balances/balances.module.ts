import { Module } from "@nestjs/common";
import { BalancesService } from "./balances.service";
import { BalancesController } from "./balances.controller";

@Module({
    imports: [],
    controllers: [BalancesController],
    providers: [BalancesService],
})
export class BalancesModule {}
