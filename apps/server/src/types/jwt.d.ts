import "@fastify/jwt";

declare module "@fastify/jwt" {
  export interface FastifyJWT {
    user: {
      sub: string;
      name: string;
      surname: string;
      email: string;
    };
  }
}