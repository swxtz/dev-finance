import { INestApplication } from "@nestjs/common";
import { createNestAppInstance } from "test/test.helper";
import request from "supertest";
import { IUser } from "@/users/dtos/create-user-dtos";

describe("BalancesController", () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await createNestAppInstance();
    });

    describe("GET /balance", async () => {
        it("should not be able to get balance without authorization", async () => {
            await request(app.getHttpServer()).get("/balance").expect(401);
        });

        it("should be able to get balance with authorization", async () => {
            const localUser: IUser = {
                email: "balance@email.com",
                firstName: "Balance",
                lastName: "Balance",
                password: "12345678",
                avatarUrl:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            };

            await request(app.getHttpServer()).post("/users").send(localUser);

            const responseToken = await request(app.getHttpServer())
                .post("/auth")
                .send({
                    email: localUser.email,
                    password: localUser.password,
                });

            await request(app.getHttpServer())
                .get("/balance")
                .set("Authorization", `Bearer ${responseToken.body.token}`)
                .expect(200);
        });
    });
});
