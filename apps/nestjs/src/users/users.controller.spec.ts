import { vi } from "vitest";
import request from "supertest";

type User = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    avatarUrl: string;
};

import { PrismaClient } from "@prisma/client";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "@/app.module";
import { UsersService } from "./users.service";
import { INestApplication } from "@nestjs/common";

const prisma = new PrismaClient();
const user: User[] = [
    {
        email: "john.doe@test.com",
        firstName: "John",
        lastName: "Doe",
        password: "12345678",
        avatarUrl:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    },
];

describe("UsersController", () => {
    let app: INestApplication;
    describe("Create User", async () => {
        beforeAll(async () => {
            const mockAppModule: TestingModule = await Test.createTestingModule(
                {
                    imports: [AppModule],
                    providers: [UsersService],
                },
            ).compile();

            const app = mockAppModule.createNestApplication();
            // httpService = mockAppModule.get<HttpService>(HttpService);
            await app.init();
        });

        //deve ser possivel criar um usuario
        beforeEach(async () => {
            try {
                await prisma.user.deleteMany();
            } catch (error) {
                console.log(error);
            }
        });

        it("should be possible to create a user", async () => {
            const response = await request(app.getUrl())
                .post("/users")
                .send(user[0]);

            expect(response).toBe(201);
        });
    });
});
