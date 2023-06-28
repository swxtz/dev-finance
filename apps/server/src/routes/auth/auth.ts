import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function authRoutes(app: FastifyInstance) {
  app.post("/auth/user", (req, reply) => {
    const userSchema = z.object({
      email: z
        .string()
        .min(4, { message: "o email deve conter no minímo 4 caracteres" })
        .nonempty()
        .email(),

      password: z
        .string()
        .min(6, { message: "a senha dever conter no minímo 6 caracteres" }),
    });

    try {
      const { email, password } = userSchema.parse(req.body);

      
    } catch (err) {
      if (err instanceof z.ZodError) {
        return reply.code(400).send({ message: err.issues[0].message });
      }
    }
  });
}
