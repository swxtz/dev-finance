import { INestApplication } from "@nestjs/common";
import { createNestAppInstance } from "test/test.helper";
import request from "supertest";
import { IAuth } from "./dtos/signin-dtos";

const credentials: IAuth[] = [
    {
        email: "invalid@email.com",
        password: "invalidpassword",
    },
];

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
    });
});
