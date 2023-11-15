// import { Logout } from "@/components/Dashboard/Button/Button";
"use client";
import { MoneyWrapper } from "@/components/Dashboard/MoneyWrapper/MoneyWrapper";
import { useEffect, useState } from "react";

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
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/token"); // Replace with your API endpoint
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
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
                {/* <NewTransactionModal /> */}
                <span>asdqda</span>
            </div>

            <div>
                {data ? (
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
        </main>
    );
}
