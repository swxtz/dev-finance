import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { verifyPwdHash } from "../../lib/bcrypt";


export async function authRoutes(app: FastifyInstance) {
  app.post("/auth/user", async (req, reply) => {
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

    const timeToExpires = 60 * 60 * 24; // 24H

    try {
      const { email, password } = userSchema.parse(req.body);

      const query = await prisma.user.findUnique({
        where: {
          email,
        },
        select: {
          password: true,
          name: true,
          surname: true,
          email: true,
          id: true,
        },
      });

      if (!query) {
        return reply.send({ message: "email não achado" }).status(400);
      }

      const verifyPwd = await verifyPwdHash(password, query.password);

      if(verifyPwd == false) {
        return reply.send({ message: "Senha incorreta!" });
      }

      const token = app.jwt.sign({
        name: query.name,
        surname: query.surname,
        email: query.email,
      }, {
        expiresIn: timeToExpires,
        sub: query.id
      });

      return reply.send({ "token": token }).status(200);

    } catch (err) {
      if (err instanceof z.ZodError) {
        return reply.code(400).send({ message: err.issues[0].message });
      }
    }
  });
}
