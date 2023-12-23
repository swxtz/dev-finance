import { ConfigService } from "@nestjs/config";

const env = new ConfigService();

export const jwtConstants = {
    secret: env.getOrThrow("JWT_SECRET"),
    jwtExpiresIn: Number(env.getOrThrow("JWT_EXPIRES_IN")),
};
