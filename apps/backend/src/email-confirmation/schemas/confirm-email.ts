import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const schema = z.object({
    token: z.string(),
});

export class ConfirmEmailSchema extends createZodDto(schema) {}

export type ConfirmEmailDto = z.infer<typeof schema>;
