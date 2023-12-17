import { INestApplication } from "@nestjs/common";
import { createNestAppInstance, deleteUserByEmail } from "test/test.helper";
import request from "supertest";
import { IAuth } from "./dtos/signin-dtos";
import { IUser } from "@/users/dtos/create-user-dtos";

const credentials: IAuth[] = [
    {
        email: "invalid@email.com",
        password: "invalidpassword",
    },
    {
        email: "",
        password: "invalidpassword",
    },
    {
        email: "invalidemail.com",
        password: "",
    },
];

const user: IUser = {
    firstName: "Auth",
    lastName: "Auth",
    email: "auth@testEmail.com",
    password: "authPassword",
    avatarUrl: "https://www.testavatar.com",
};

describe("AuthController", () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await createNestAppInstance();
    });

    describe("POST /auth", async () => {
        it("should not be able to authenticate with invalid credentials", async () => {
            await request(app.getHttpServer())
                .post("/auth")
                .send(credentials[0])
                .expect(400);
        });

        it("should not be able to authenticate without email", async () => {
            await request(app.getHttpServer())
                .post("/auth")
                .send(credentials[1])
                .expect(400);
        });

        it("should not be able to authenticate without password", async () => {
            await request(app.getHttpServer())
                .post("/auth")
                .send(credentials[2])
                .expect(400);
        });

        it("should be able to authenticate with valid credentials", async () => {
            await request(app.getHttpServer()).post("/users").send(user);
            const response = await request(app.getHttpServer())
                .post("/auth")
                .send({
                    email: user.email,
                    password: user.password,
                });

            await deleteUserByEmail(user.email);

            expect(response.statusCode).toBe(201);
        });
    });
});
