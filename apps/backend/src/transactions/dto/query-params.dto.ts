import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const schema = z.object({
    limits: z.number().min(0).max(100),
});

export class QueryParamsDto extends createZodDto(schema) {}
