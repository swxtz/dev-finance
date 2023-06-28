import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { getPwdHash } from "../lib/bcrypt";

export async function userRoutes(app: FastifyInstance) {
  app.get("/user/:id", (req, reply) => {
    console.log();
  });

  app.post("/user", async (req, reply) => {
    const schema = z.object({
      name: z
        .string()
        .min(3, { message: "O nome deve ter no minimo 3 caracteres" }),
      email: z
        .string()
        .email({ message: "E-mail não valido" })
        .min(5, { message: "o E-mail deve ter no minimo 5 caracteres" }),
      password: z
        .string()
        .min(6, { message: "A senha deve ter no minimo 6 caracteres" }),
    });

    try {
      const { name, email, password } = schema.parse(req.body);

      const emailExist = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (emailExist) {
        return reply
          .code(400)
          .send({ message: "Esse E-mail já foi utilizado" });
      }

      const hash = await getPwdHash(password);

      await prisma.user.create({
        data: {
          email,
          name,
          password: hash
        }
      });

      reply.send({ message: "conta criada com sucesso" });

      return reply.code(201).send({ message: "Conta criada" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return reply.code(400).send({ message: err.issues[0].message });
      }
    }
  });
}
