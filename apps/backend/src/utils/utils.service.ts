import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UtilsService {
    constructor(private readonly jwtService: JwtService) {}

    getToken(auth: string): { token: string } {
        const token = auth.split(" ")[1];
        return this.jwtService.decode(token, { json: true }) as {
            token: string;
        };
    }
}
