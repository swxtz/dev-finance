"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export interface IRegisterUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface IErrorRegisterUser extends Error {
    response: {
        data: {
            message: string;
        };
    };
}

async function registerUser({ email, firstName, lastName, password }: IRegisterUser) {
    const response = await axios.post("http://localhost:3333/users", {
        firstName,
        lastName,
        email,
        password,
    });

    return response.data;
}


export function useMutationPostUser() {
    return useMutation({
        mutationKey: ["registerUser"],
        mutationFn: (user: IRegisterUser) => registerUser(user),
        onSuccess: () => {
            toast.success("Conta criada com sucesso");
        },
        onError: (err: IErrorRegisterUser) => {
            toast.error(err.response.data.message, {
                autoClose: 5000,
                hideProgressBar: false,
            });
        },
    });
}