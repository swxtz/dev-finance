import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dtos/signin-dtos";
import { ZodValidationPipe } from "nestjs-zod";
import { ApiTags } from "@nestjs/swagger";

@Controller("auth")
@ApiTags("Auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    @UsePipes(new ZodValidationPipe(SignInDto))
    async signIn(@Body() data: SignInDto) {
        return this.authService.SignIn(data);
    }
}
