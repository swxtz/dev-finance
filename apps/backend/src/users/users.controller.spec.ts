import { INestApplication } from "@nestjs/common";
import request from "supertest";

type User = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    avatarUrl: string;
};

import {
    cleanDB,
    createNestAppInstance,
    deleteUserByEmail,
} from "test/test.helper";

const user: User[] = [
    {
        email: "john.doe@test.com",
        firstName: "John",
        lastName: "Doe",
        password: "12345678",
        avatarUrl:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    },
    {
        email: "",
        firstName: "John",
        lastName: "Doe",
        password: "12345678",
        avatarUrl:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    },
    {
        email: "john.doe@test.com",
        firstName: "",
        lastName: "Doe",
        password: "12345678",
        avatarUrl:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    },
    {
        email: "john.doe@test.com",
        firstName: "John",
        lastName: "",
        password: "12345678",
        avatarUrl:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    },
    {
        email: "john.doe@test.com",
        firstName: "John",
        lastName: "Doe",
        password: "",
        avatarUrl:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    },
    {
        email: "john.doe@test.com",
        firstName: "John",
        lastName: "Doe",
        password: "12345678",
        avatarUrl: "",
    },
];

describe("UsersController", () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await createNestAppInstance();
    });

    afterEach(async () => {
        await cleanDB();
    });

    describe("POST /users", async () => {
        beforeEach(async () => {
            await cleanDB();
        });

        afterEach(async () => {
            await cleanDB();
        });

        it("should not be posible create user without email", async () => {
            await request(app.getHttpServer())
                .post("/users")
                .send(user[1])
                .expect(400);
        });

        it("should not be posible create user without firstName", async () => {
            await request(app.getHttpServer())
                .post("/users")
                .send(user[2])
                .expect(400);
        });

        it("should not be posible create user without lastName", async () => {
            await request(app.getHttpServer())
                .post("/users")
                .send(user[3])
                .expect(400);
        });

        it("should not be posible create user without password", async () => {
            await request(app.getHttpServer())
                .post("/users")
                .send(user[4])
                .expect(400);
        });

        it("should not be posible create user without avatarUrl", async () => {
            await request(app.getHttpServer())
                .post("/users")
                .send(user[5])
                .expect(400);
        });
    });

    describe("POST /users", async () => {
        beforeEach(async () => {
            await cleanDB();
        });

        afterEach(async () => {
            await cleanDB();
        });

        it("should be posible create user", async () => {
            const localUser: User = {
                email: "local@user.com",
                firstName: "Local",
                lastName: "User",
                avatarUrl:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                password: "12345678",
            };

            const res = await request(app.getHttpServer())
                .post("/users")
                .send(localUser);

            await deleteUserByEmail(localUser.email);

            expect(res.status).toBe(201);
        });
    });

    describe("GET /users", async () => {
        beforeEach(async () => {
            await cleanDB();
        });

        afterEach(async () => {
            await cleanDB();
        });

        // Todo: Verficar email
        // it("should be posible get users", async () => {
        //     await request(app.getHttpServer())
        //         .post("/users")
        //         .send(user[0])
        //         .expect(201);

        //     const token = await getJwt(user[0].email, user[0].password);

        //     const response = await request(app.getHttpServer())
        //         .get("/users")
        //         .auth(token, { type: "bearer" });

        //     console.log(response.body);
        //     expect(response.statusCode).toBe(200);
        // });

        it("should not be posible get users without token", async () => {
            await request(app.getHttpServer())
                .post("/users")
                .send(user[0])
                .expect(201);

            await request(app.getHttpServer()).get("/users").expect(401);
        });
    });

    afterAll(async () => {
        await app.close();
    });
});
