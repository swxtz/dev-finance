"use client";

import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface User {
    id: string
    firstName: string
    lastName: string
    email: string
    avatarUrl: string
  }
  

async function getUser(): Promise<User> {
    const session = await getSession();

    if (!session) {
        redirect("/login");
    }

    const response = await api.get("/users", {
        headers: {
            Authorization: `Bearer ${session?.token}`
        }
    });

    return response.data; 
}

export function useQueryGetUser() {
    return useQuery({
        queryKey: ["get-user", "info"],
        queryFn: () => getUser(),
        refetchOnWindowFocus: false,
    });
}