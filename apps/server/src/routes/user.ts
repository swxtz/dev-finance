import { FastifyInstance } from "fastify";

export async function userRoutes(app: FastifyInstance) {
    app.get("/users", (req, reply) => {
      return reply.send("Ok");
    });
}