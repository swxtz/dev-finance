import dotenv from "dotenv";
dotenv.config();

import fastify from "fastify";
import { userRoutes } from "./routes/user";

const app = fastify();
const port = Number(process.env.HOST_PORT) || 3000;

app.register(userRoutes);

app.listen({
  port,
}).then(() => {
  console.log(`🚀 HTTP Server running on http://localhost:${port}`);
});