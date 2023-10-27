import { Test, TestingModule } from "@nestjs/testing";
import { BalancesController } from "./balances.controller";
import { BalancesService } from "./balances.service";
import { vi } from "vitest";
import { Balance, BalanceEntity } from "./entity/Balance.entity";
import { PrismaService } from "@/prisma/prisma.service";

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

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BalancesController],
            providers: [
                BalancesService,
                { provide: PrismaService, useValue: prismaMock },
            ],
        }).compile();

        balancesService = module.get<BalancesService>(BalancesService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should be defined", () => {
        expect(balancesController).toBeDefined();
        expect(balancesService).toBeDefined();
    });

    describe("get balance", () => {
        it("should return balance", async () => {
            const result = await balancesService.getBalances("asd");

            console.log(result);

            expect(result).toBe("balance");
        });
    });
});
