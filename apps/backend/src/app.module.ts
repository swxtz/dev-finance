import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { UtilsModule } from "./utils/utils.module";
import { TransactionsModule } from "./transactions/transactions.module";
import { BalancesModule } from "./balances/balances.module";
import { UploadsModule } from "./uploads/uploads.module";
import { ConfigModule } from "@nestjs/config";
import { EmailsModule } from "./emails/emails.module";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        PrismaModule,
        UsersModule,
        AuthModule,
        UtilsModule,
        TransactionsModule,
        BalancesModule,
        UploadsModule,
        EmailsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
