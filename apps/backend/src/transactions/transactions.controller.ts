import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UsePipes,
    UseGuards,
    Headers,
} from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";
import { ZodValidationPipe } from "nestjs-zod";
import { AuthGuard } from "@/auth/auth.guard";
import { UtilsService } from "@/utils/utils.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@Controller("transactions")
@ApiTags("Transactions")
export class TransactionsController {
    constructor(
        private readonly transactionsService: TransactionsService,
        private jwtUtils: UtilsService,
    ) {}

    @Post()
    @UsePipes(new ZodValidationPipe(CreateTransactionDto))
    @UseGuards(AuthGuard)
    @ApiBearerAuth("jwt")
    create(
        @Body() createTransactionDto: CreateTransactionDto,
        @Headers("Authorization") jwt: any,
    ) {
        const token = this.jwtUtils.getToken(jwt);
        return this.transactionsService.create(createTransactionDto, token);
    }

    @Get("all")
    @UseGuards(AuthGuard)
    @ApiBearerAuth("jwt")
    findAll(@Headers("Authorization") jwt: any) {
        const token = this.jwtUtils.getToken(jwt);
        return this.transactionsService.findAll(token);
    }

    @Get("me")
    @UseGuards(AuthGuard)
    @ApiBearerAuth("jwt")
    findAllByUser(@Headers("Authorization") jwt: any) {
        const token = this.jwtUtils.getToken(jwt);
        return this.transactionsService.findAllByUser(token);
    }

    @Get(":id")
    @ApiBearerAuth("jwt")
    findOne(@Param("id") id: string) {
        return this.transactionsService.findOne(+id);
    }

    @Get("")
    @UseGuards(AuthGuard)
    @ApiBearerAuth("jwt")
    findByUserTable(@Headers("Authorization") jwt: any) {
        const token = this.jwtUtils.getToken(jwt);
        return this.transactionsService.findByUserTable(token);
    }

    @Patch(":id")
    @ApiBearerAuth("jwt")
    update(
        @Param("id") id: string,
        @Body() updateTransactionDto: UpdateTransactionDto,
    ) {
        return this.transactionsService.update(+id, updateTransactionDto);
    }

    @Delete(":id")
    @UseGuards(AuthGuard)
    @ApiBearerAuth("jwt")
    remove(@Param("id") id: string, @Headers("Authorization") jwt: any) {
        const token = this.jwtUtils.getToken(jwt);
        return this.transactionsService.remove(id, token);
    }
}
