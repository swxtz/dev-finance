import { INestApplication } from "@nestjs/common";
import request from "supertest";

type User = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    avatarUrl: string;
};

import { cleanDB, createNestAppInstance } from "test/test.helper";

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

    beforeEach(async () => {
        await cleanDB();
    });

    beforeAll(async () => {
        app = await createNestAppInstance();
    });

    afterEach(async () => {
        await cleanDB();
    });

    it("should be posible create user", async () => {
        await request(app.getHttpServer())
            .post("/users")
            .send(user[0])
            .expect(201);
    });
});
