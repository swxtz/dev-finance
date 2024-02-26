"use client";

import { useQueryGetUser } from "@/hooks/querys/get-user";
import { User } from "lucide-react";
import * as AvatarRadix from "@radix-ui/react-avatar";

export function Avatar() {

    const { data } = useQueryGetUser();

    return (
        <div className="flex flex-row">
            <div className="">
                <span>{data?.firstName} {data?.lastName}</span>
            </div>
            <AvatarRadix.Root>
                <AvatarRadix.Image className="size-10 rounded-full" src={data?.avatarUrl} alt="Foto de usuario" />
                <AvatarRadix.Fallback>
                    <User className="size-6" />
                </AvatarRadix.Fallback>
            </AvatarRadix.Root>
        </div>
    );
}