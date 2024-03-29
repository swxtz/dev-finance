import { INestApplication } from "@nestjs/common";
import { createNestAppInstance, deleteUserByEmail } from "test/test.helper";
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

            const requestToken = await request(app.getHttpServer())
                .get("/balance")
                .set("Authorization", `Bearer ${responseToken.body.token}`);

            await deleteUserByEmail(localUser.email);

            expect(requestToken.statusCode).toBe(200);
        });

        it("should be not able to get balance with invalid authorization", async () => {
            const token =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbHFoazU1NWYwMDAwc2JtbWpxOWprMmRiIiwiZmlyc3ROYW1lIjoiR3VzdGF2byIsImxhc3ROYW1lIjoiTWVuZG9uw6dhIiwiYXZhdGFyVXJsIjpudWxsLCJlbWFpbCI6ImpvaG4uZG9lQHRlc3QuY29tIiwiY3JlYXRlZEF0IjoiMjAyMy0xMi0yM1QwNDoyNTo0NC4wMTlaIiwidXBkYXRlZEF0IjoiMjAyMy0xMi0yM1QwNDoyNTo0NC4wMTlaIiwiaWF0IjoxNzAzMzA2NDQyLCJleHAiOjE3MDMDJ9.F92_XRp_exS-_aM5nipp3xLmaUcnfyJIors9dbb7Go4";

            const requestToken = await request(app.getHttpServer())
                .get("/balance")
                .set("Authorization", `Bearer ${token}`);
            expect(requestToken.statusCode).toBe(401);
        });
    });
});
