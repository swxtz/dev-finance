import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = process.env.HOSTPORT || 3000;
    app.enableCors();
    await app.listen(port);

    const config = new DocumentBuilder()
        .setTitle("Dev Finance API")
        .setDescription("Um site para gerenciar sua vida financeira")
        .setVersion("0.0.1")
        .addTag("finance")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("swagger", app, document);

    console.log(
        `Application is running on: ${await app.getUrl()} or http://localhost:${port}`,
    );
}
bootstrap();
