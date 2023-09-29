import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { UtilsModule } from "./utils/utils.module";
import { TransactionsModule } from './transactions/transactions.module';

@Module({
    imports: [PrismaModule, UsersModule, AuthModule, UtilsModule, TransactionsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
