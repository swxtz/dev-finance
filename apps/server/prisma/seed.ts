import { getPwdHash } from "../src/lib/bcrypt";
import { prisma } from "../src/lib/prisma";


async function run() {

  const idUsers = ["0988d723-248b-49ac-95d0-363962a1bbda", "0988d723-248b-49ac-95d0-363962a1bbdb"];

  const idTransactions = ["0988d723-248b-49ac-95d0-363962a1bbdc", "0988d723-248b-49ac-95d0-363962a1bbdd", "0988d723-248b-49ac-95d0-363962a1bbde", "0988d723-248b-49ac-95d0-363962a1bbdf"];

  const data = {
    "jonh": {
      "email":  "jonh.doe@example.com",
      "name": "Jonh",
      "surname": "Doe",
      "pass": "superPassword"
    },
    "jana": {
      "email": "jana.doe@example.com",
      "name": "Jona",
      "surname": "Doe",
      "pass": "superPassword"
    }
  };

  await prisma.transaction.deleteMany();
  await prisma.user.deleteMany();

  // Cria usuários [jonh, jana]
  await Promise.all([
    prisma.user.create({
      data: {
        id: idUsers[0],
        name: data.jonh.name,
        surname: data.jonh.surname,
        email: data.jonh.email,
        password: await getPwdHash(data.jonh.pass),
      }
    }),

    prisma.user.create({
      data: {
        id: idUsers[1],
        name: data.jana.name,
        surname: data.jana.surname,
        email: data.jana.email,
        password: await getPwdHash(data.jana.pass)
      }
    })
  ]);

  await Promise.all([
  
    // Jonh Doe
    prisma.transaction.create({
      data: {
        id: idTransactions[0],
        value: 100,
        description: "Pagamento de conta",
        idOwner: idUsers[0], 
        title: "Conta de luz",
        type: "EXPENSE",
      }
    }),

    // Jonh Doe
    prisma.transaction.create({
      data: {
        id: idTransactions[1],
        value: 250000,
        description: "Pagamento de salário",
        idOwner: idUsers[0], 
        title: "Salario",
        type: "INCOME",
      }
    }),

    // Jana Doe
    prisma.transaction.create({
      data: {
        id: idTransactions[2],
        value: 100,
        description: "Pagamento de conta",
        idOwner: idUsers[1],
        title: "Conta de luz",
        type: "EXPENSE",
      }
    }),

    prisma.transaction.create({
      data: {
        id: idTransactions[3],
        value: 250000,
        description: "Pagamento de salário",
        idOwner: idUsers[1],
        title: "Salario",
        type: "INCOME"
      },
    }),
  ]);

}

run();