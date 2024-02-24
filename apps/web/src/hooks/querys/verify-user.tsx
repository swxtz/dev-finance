"use client";

import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface IGetUser {
    email: string;
    password: string;
}

async function getUser(data: IGetUser) {
    const response = await api.post("/auth", data);
    return response;
}

export function useQueryVerifyUser(data: IGetUser) {
    return useQuery({
        queryKey: ["verify-user", data],
        queryFn: () => getUser(data),
    });
}