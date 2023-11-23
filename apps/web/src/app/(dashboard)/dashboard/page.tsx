import { NewTransactionModal } from "@/components/Dashboard/NewTransactionModal/NewTransactionModal";
import { Sair } from "@/components/Sair";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";

// async function getBalance() {
//     // const token =
//     await fetch(`${apiUrl}/api/token`);

//     // if (!token) {
//     //     return;
//     // }
//     // console.log(token);
//     // const response = await fetch(`${apiUrl}/users/balance`, {
//     //     headers: {
//     //         "Authorization": `Bearer ${localStorage.getItem(token.sub || "")}`
//     //     }
//     // });
//     // const data1 = await response.json();
//     // console.log(data1);
// }

export default async function Dashboard() {
    const session = await getServerSession(nextAuthOptions);

    console.log(session?.token);
    return (
        <main className="mx-32">
            <div className="mt-20">
                {/* {token ? (
                    <MoneyWrapper
                        income="17.400,00"
                        expense="1.259,00"
                        balance="16.141,00"
                    />
                ) : (
                    <MoneyWrapper
                        income="17.400,00"
                        expense="1.259,00"
                        balance="16.141,00"
                    />
                )} */}
            </div>

            <div className="mt-16">
                <NewTransactionModal />
                <Sair />
                <p>{session?.token}</p>
            </div>
        </main>
    );
}
