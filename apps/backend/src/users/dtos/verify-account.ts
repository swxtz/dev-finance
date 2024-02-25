import { ApiProperty } from "@nestjs/swagger";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const schema = z.object({
    email: z.string().email(),
    token: z.string().min(6).max(6),
});

export class VerifyAccountSchema extends createZodDto(schema) {
    @ApiProperty()
    email: string;
    @ApiProperty()
    token: string;
}

export type IVerifyAccount = z.infer<typeof schema>;
