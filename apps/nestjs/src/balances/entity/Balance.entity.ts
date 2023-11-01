export class BalanceEntity {
    id: string;
    income: number;
    expense: number;
    balance: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(todo?: Partial<BalanceEntity>) {
        this.id = todo?.id;
        this.income = todo?.income;
        this.expense = todo?.expense;
        this.balance = todo?.balance;
        this.createdAt = todo?.createdAt;
        this.updatedAt = todo?.updatedAt;
    }
}

export type Balance = BalanceEntity;
