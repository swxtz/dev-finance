import { ApiProperty } from "@nestjs/swagger";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(255),
});

export class SignInDto extends createZodDto(schema) {
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}
