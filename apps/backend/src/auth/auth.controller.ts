import { Body, Controller, Get, UsePipes } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dtos/signin-dtos";
import { ZodValidationPipe } from "nestjs-zod";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    @UsePipes(new ZodValidationPipe(SignInDto))
    async signIn(@Body() data: SignInDto) {
        return this.authService.SignIn(data);
    }
}