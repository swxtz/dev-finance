"use client";

import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

async function confirmEmail(token: string) {
  const response = await api.get(`/email-confirmation/confirm/${token}`);
  return response;
}

export function useQueryConfirmEmail(token: string) {
  return useQuery({
    queryKey: ["confirm-email", token],
    queryFn: () => confirmEmail(token),
  });
}