"use client";

import { signOut } from "next-auth/react";

export function Sair() {
    return <button onClick={() => signOut()}>sair</button>;
}