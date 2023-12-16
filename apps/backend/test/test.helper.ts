/* eslint-disable prefer-const */
import { AppModule } from "@/app.module";
import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { PrismaClient } from "@prisma/client";
import request from "supertest";

export const prisma = new PrismaClient();

export async function cleanDB() {
    const usersEmail = ["john.doe@test.com", "jana.doe@test.com"];

    console.time("delete users 🗑️");
    try {
        await Promise.all([
            await prisma.balance.delete({
                where: { emailOwner: usersEmail[0] },
            }),
        ]);

        await Promise.all([
            await prisma.user.delete({
                where: { email: usersEmail[0] },
            }),
        ]);
    } catch (error) {
        console.log("");
    }
}

export async function createNestAppInstance(): Promise<INestApplication> {
    let app: INestApplication;

    const moduleRef = await Test.createTestingModule({
        imports: [AppModule],
        providers: [],
    }).compile();

    app = moduleRef.createNestApplication();

    await app.init();

    return app;
}

export async function getJwt(email: string, password: string): Promise<string> {
    const app = await createNestAppInstance();

    const response = await request(app.getHttpServer())
        .post("/auth")
        .send({ email, password });

    console.log(response.body);

    return response.body.token;
}

export async function sleepTest(millis: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, millis));
}



// Todo: fazer uam funcção para deletar usuario por email.
export async function deleteUserByEmail() {

}