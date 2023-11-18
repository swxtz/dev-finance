
"use client";
import { MoneyWrapper } from "@/components/Dashboard/MoneyWrapper/MoneyWrapper";
import { NewTransactionModal } from "@/components/Dashboard/NewTransactionModal/NewTransactionModal";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
// import { signOut } from "next-auth/react";

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

export default function Dashboard() {
    const [token, setToken] = useState(null);
    const [balance, setBalance] = useState(null);

    const apiUrl = process.env.API_URL || "http://localhost:3333";

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/token"); // Replace with your API endpoint
                const jsonToken = await response.json();
                await console.log(jsonToken.token);
                setToken(jsonToken);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchToken();
    }, []);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const tokenToParse = `Bearer ${token}`;
                const response = await fetch(`${apiUrl}/balance`, {
                    headers: { Authorization: tokenToParse },
                }); // Replace with your API endpoint
                const jsonBalance = await response.json();
                await console.log(jsonBalance);
                setBalance(jsonBalance.balance);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchBalance();
    }, [token]);
    return (
        <main className="mx-32">
            <div className="mt-20">
                {token ? (
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
                )}
            </div>

            <div className="mt-16">
                <NewTransactionModal />
                <button onClick={() => signOut()}>sair</button>
                
            </div>
        </main>
    );
}
