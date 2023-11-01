import { PrismaClient } from "@prisma/client";
import * as argon from "argon2";

const prisma = new PrismaClient();

async function seed() {
    const users = [
        {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            password: "password",
            avatarUrl: "https://i.pravatar.cc/300?u=john.doe",
            balance: {
                income: 0,
                expense: 0,
                balance: 0,
            },
        },
        // Jana Doe
        {
            firstName: "Jana",
            lastName: "Doe",
            email: "jana.doe@example.com",
            password: "password",
            avatarUrl: "https://i.pravatar.cc/300?u=jana.doe",
            balance: {
                income: 0,
                expense: 0,
                balance: 0,
            },
        },
    ];

    console.time("delete tables 🗑️");

    await Promise.all([
        await prisma.transaction.deleteMany(),
        await prisma.balance.deleteMany(),
        await prisma.user.deleteMany(),
    ]);

    console.timeEnd("delete tables 🗑️");
    console.time("create users 👨‍👩‍👧‍👦");

    await Promise.all([
        await prisma.user.create({
            data: {
                firstName: users[0].firstName,
                lastName: users[0].lastName,
                email: users[0].email,
                passwordHash: await argon.hash(users[0].password),
                avatarUrl: users[0].avatarUrl,
                balance: {
                    create: users[0].balance,
                },
            },
        }),
        await prisma.user.create({
            data: {
                firstName: users[1].firstName,
                lastName: users[1].lastName,
                email: users[1].email,
                passwordHash: await argon.hash(users[1].password),
                avatarUrl: users[1].avatarUrl,
                balance: {
                    create: users[1].balance,
                },
            },
        }),
    ]);

    console.timeEnd("create users 👨‍👩‍👧‍👦");
}

seed()
    .catch((err) => {
        console.log(err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
