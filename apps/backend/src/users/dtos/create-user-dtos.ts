import { ApiProperty } from "@nestjs/swagger";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const schema = z.object({
    firstName: z.string().min(2).max(255),
    lastName: z.string().min(2).max(255),
    email: z.string().email(),
    password: z.string().min(8).max(255),
    avatarUrl: z.string().url().optional(),
});

export class CreateUserDto extends createZodDto(schema) {
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    avatarUrl: string;
}
