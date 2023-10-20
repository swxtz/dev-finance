import { ApiProperty } from "@nestjs/swagger";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const schema = z.object({
    jwt: z.string().optional(),
});

export class FindTransactionsDto extends createZodDto(schema) {
    @ApiProperty()
    jwt?: string;
}
