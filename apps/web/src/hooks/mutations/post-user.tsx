"use client";

import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface IPostUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface ApiError extends Error {
    response: {
        data: {
            message: string;
        };
    };
}

async function postUser(data: IPostUser) {
    const response = await api.post("/users", data);
    return response;
}

export function useMutationPostUser() {
    const { toast } = useToast();

    return useMutation({
        mutationFn: postUser,
        mutationKey: ["post-user"],
        onSuccess: () => {
            toast({
                title: "Conta criada com sucesso",
                description:
                    "Por favor verifique seu e-mail para ativar sua conta.",
                variant: "default",
            });
        },
        onError: (error: ApiError) => {
            console.log(error);
            toast({
                title: "Erro ao criar conta",
                description: error.response.data.message,
                variant: "destructive",
            });
        },
    });
}
