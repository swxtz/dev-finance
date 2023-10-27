import { Test, TestingModule } from "@nestjs/testing";
import { BalancesController } from "./balances.controller";
import { BalancesService } from "./balances.service";
import { vi } from "vitest";
import { Balance } from "./entity/Balance.entity";
import { PrismaService } from "@/prisma/prisma.service";
import { AuthGuard } from "@/auth/auth.guard";
import * as request from "supertest";
import { AppModule } from "@/app.module";

// const balancesList: Balance[] = [
//     new BalanceEntity({
//         id: "1",
//         balance: 1,
//         income: 2,
//         expense: 1,
//         updatedAt: new Date(),
//         createdAt: new Date(),
//     }),
// ];

const mockBalance: Balance[] = [
    {
        id: "mock1",
        income: 7,
        expense: 2,
        balance: 5,
        updatedAt: new Date(),
        createdAt: new Date(),
    },
];

const prismaMock = {
    balance: {
        getBalances: vi.fn().mockResolvedValue(mockBalance[0]),
    },
};

describe("BalancesController", () => {
    let balancesController: BalancesController;
    let balancesService: BalancesService;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let prisma: PrismaService;
    let app;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BalancesController],
            providers: [
                BalancesService,
                { provide: PrismaService, useValue: prismaMock },
                AuthGuard,
            ],
        }).compile();

        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule], // Importe seu AppModule ou qualquer módulo contendo o endpoint protegido
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();

        balancesService = module.get<BalancesService>(BalancesService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("should be defined", () => {
        expect(balancesController).toBeDefined();
        expect(balancesService).toBeDefined();
    });

    describe("get balance", () => {
        // deve retornar um error 401 sem token
        it("should return 401 without token", async () => {
            const response = await request(app.getHttpServer()).get(
                "/balances",
            );
            expect(response.status).toBe(401);
        });
    });
});
