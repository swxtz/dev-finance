import { z } from "zod";

const schema = z.object({
    for: z.string().email(),
    body: z.string(),
});

