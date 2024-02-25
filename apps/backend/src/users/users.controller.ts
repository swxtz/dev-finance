import {
    Body,
    Controller,
    Get,
    Headers,
    HttpCode,
    Post,
    UseGuards,
    UsePipes,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user-dtos";
import { ZodValidationPipe } from "nestjs-zod";
import { AuthGuard } from "@/auth/auth.guard";
import { UtilsService } from "@/utils/utils.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { IVerifyAccount, VerifyAccountSchema } from "./dtos/verify-account";

@Controller("users")
@ApiTags("Users")
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private jwtUtils: UtilsService,
    ) {}

    @UsePipes(new ZodValidationPipe(CreateUserDto))
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    @UseGuards(AuthGuard)
    @ApiBearerAuth("jwt")
    async find(@Headers("Authorization") jwt: any) {
        const token = this.jwtUtils.getToken(jwt);
        return this.usersService.find(token);
    }

    @Post("verify-account")
    @UsePipes(new ZodValidationPipe(VerifyAccountSchema))
    @HttpCode(200)
    async verifyAccount(@Body() body: IVerifyAccount) {
        return this.usersService.verifyAccount(body);
    }
}
