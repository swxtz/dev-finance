"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getSession } from "next-auth/react";

interface IBalance {
    id: string;
    emailOwner: string;
    income: number;
    expense: number;
    balance: number;
    createdAt: string;
    updatedAt: string;
}

// Todo trocar a URL para .env
async function getBalance(): Promise<IBalance> {
    const session = await getSession();

    const response = await axios.get("http://localhost:3333/balance", {
        headers: {
            Authorization: `Bearer ${session?.token}`,
        }
    });

    return response.data;
}

export function useQueryGetBalance() {
    return useQuery({
        queryKey: ["balance"],
        queryFn: () => getBalance(),
    });
}