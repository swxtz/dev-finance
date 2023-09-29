import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = process.env.HOSTPORT || 3000;
    await app.listen(port);
    console.log(
        `Application is running on: ${await app.getUrl()} or http://localhost:${port}`,
    );
}
bootstrap();
