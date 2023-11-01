import dotenv from "dotenv";
dotenv.config();

import fastify from "fastify";

const app = fastify();
const port = Number(process.env.HOSTPORT) || 3000;

app.get("/", async (request, reply) => {
	return { hello: "world" };
});

app.listen({port}).then(() => {
	console.log(`🚀 HTTP Server running on http://localhost:${port}`);
});