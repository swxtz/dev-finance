import {
    Body,
    Controller,
    Get,
    Headers,
    Post,
    UseGuards,
    UsePipes,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user-dtos";
import { ZodValidationPipe } from "nestjs-zod";
import { AuthGuard } from "@/auth/auth.guard";
import { UtilsService } from "@/utils/utils.service";
import { ApiTags } from "@nestjs/swagger";

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
    async find(@Headers("Authorization") jwt: any) {
        const token = this.jwtUtils.getToken(jwt);
        return this.usersService.find(token);
    }
}
