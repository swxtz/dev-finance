import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import request from "supertest";
import { vi } from "vitest";
import { PrismaService } from "@/prisma/prisma.service";

describe("UsersController", () => {
    let userController: UsersController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService, PrismaService],
        }).compile();

        controller = module.get<UsersController>(UsersController);
    });

    describe("Create user", () => {
        it("should be created user", () => {
            const john = {
                firstName: "John",
                lastName: "Doe",
                email: "teste@teste.com",
                password: "12345678",
            };

            const req = request("http://localhost:3333")
                .post("/users")
                .send(john);
            expect(req).toBe(201);
        });
    });
});
