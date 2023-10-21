"use client";

import { signOut, useSession } from "next-auth/react";

export function GetToken() {
    // async function getToken() {
    //     const response = await fetch("http://localhost:3000/api/token");
    //     const data = await response.json();
    //     console.log(data);
    // }
    // const session = await useSession();
   
    
    // console.log(session);
    return (
        <>
            {/* <button onClick={getToken}>Token</button> */}
            <button onClick={() => signOut() }>Sair</button>
        </>
    );
}
