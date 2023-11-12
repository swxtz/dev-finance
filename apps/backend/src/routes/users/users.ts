import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function usersRoutes(app: FastifyInstance) {
    app.post("/user", async (req, reply) => {
        const schema = z.object({
            firstName: z.string().min(2).max(50),
            lastName: z.string().min(2).max(50),
            email: z.string().email(),
            password: z.string().min(8).max(255),
            avatarUrl: z.string().url().optional(),
        });

        try {
            const user = schema.parse(req.body);
            return reply.status(201).send(user);
        } catch (error) {
            console.log(error);
        }
    });
}