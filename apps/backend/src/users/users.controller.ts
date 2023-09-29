import { Body, Controller, Get, Post, UsePipes } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user-dtos";
import { ZodValidationPipe } from "nestjs-zod";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UsePipes(new ZodValidationPipe(CreateUserDto))
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    async find() {
        return this.usersService.find();
    }
}
