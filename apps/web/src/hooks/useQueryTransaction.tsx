"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getSession } from "next-auth/react";


export interface ITransactions {
    amount: number;
    description: string;
    date: string;
}

async function getTransactions(limit: number): Promise<ITransactions[]> {
  const token = await getSession();

  const response = await axios.get(`http://localhost:3333/transactions/with-limits?limits=${limit}`, {
    headers: {
      Authorization: `Bearer ${token?.token}`,
    },
  });

    
  return response.data;
}

export function useQueryGetTransactionsWithLimit(limit: number) {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: () => getTransactions(limit),
  });
}