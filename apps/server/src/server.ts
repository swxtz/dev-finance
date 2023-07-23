import dotenv from "dotenv";
dotenv.config();

import fastify from "fastify";
import jwt from "@fastify/jwt";

import { userRoutes } from "./routes/user/user";
import { authRoutes } from "./routes/auth/auth";
import { transactionRoutes } from "./routes/transactions/transactions";

const app = fastify();

const port = Number(process.env.HOST_PORT) || 3000;
const jwtSecret = process.env.JWT_SECRET || "dev";

app.register(jwt, {
  secret: jwtSecret
});

app.register(userRoutes);
app.register(authRoutes);
app.register(transactionRoutes);

app.listen({
  port,
}).then(() => {
  console.log(`🚀 HTTP Server running on http://localhost:${port}`);
});
export { app };