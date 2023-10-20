
// import { Logout } from "@/components/Dashboard/Button/Button";

import { MoneyWrapper } from "@/components/Dashboard/MoneyWrapper/MoneyWrapper";
import { NewTransactionModal } from "@/components/Dashboard/NewTransactionModal/NewTransactionModal";
import { getToken } from "next-auth/jwt";


const apiUrl = process.env.API_URL || "http://localhost:3333";

async function getBalance() {
    const token = await getToken({ raw: false });

    if (!token) {
        return;
    }
    console.log(token);
    const response = await fetch(`${apiUrl}/users/balance`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem(token.sub || "")}`
        }
    });
    const data1 = await response.json();
    console.log(data1);
}

export default async function Dashboard() {
    const balance = await getBalance();

    console.log(balance);
    return (
        <main className="mx-32">
            <div className="mt-20">
                <MoneyWrapper
                    income="17.400,00"
                    expense="1.259,00"
                    balance="16.141,00"
                />
            </div>

            <div className="mt-16">
                <NewTransactionModal />
            </div>
        </main>
    );
}
