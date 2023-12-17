import { INestApplication } from "@nestjs/common";
import { UsersService } from "./users.service";
import { cleanDB, createNestAppInstance } from "test/test.helper";
import { User } from "./entity/user-entity";

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

describe("UsersService", () => {
    let app: INestApplication;
    let service: UsersService;

    beforeEach(async () => {
        await cleanDB();
    });

    beforeAll(async () => {
        app = await createNestAppInstance();
        service = app.get<UsersService>(UsersService);
    });

    describe("create", () => {
        it("should create a user", async () => {
            const result = await service.create(user[0]);
            expect(result.message).toEqual("Usuario criado com sucesso");
        });

        // it("should not create a user with empty email", async () => {
        //     const result = await service.create(user[0]);

        //     expect(result).toReturn();
        // });
    });
});
