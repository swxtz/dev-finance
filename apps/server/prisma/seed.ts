import { getPwdHash } from "../src/lib/bcrypt";
import { prisma } from "../src/lib/prisma";


async function run() {

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



  await prisma.user.deleteMany();
  await prisma.transaction.deleteMany();

  await Promise.all([
    prisma.user.create({
      data: {
        name: data.jonh.name,
        surname: data.jonh.surname,
        email: data.jonh.email,
        password: await getPwdHash(data.jonh.pass),
      }
    }),

    prisma.user.create({
      data: {
        name: data.jana.name,
        surname: data.jana.surname,
        email: data.jana.email,
        password: await getPwdHash(data.jana.pass)
      }
    })
  ]);

  await Promise.all([]);

  
}

run();