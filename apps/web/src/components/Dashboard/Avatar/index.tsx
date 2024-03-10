"use client";

import { useQueryGetUser } from "@/hooks/querys/get-user";
import { AvatarCard } from "./AvatarCard";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { AvatarPopoverButton } from "./AvatarPopoverButton";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export function Avatar() {
    const { data } = useQueryGetUser();

    return (
        <Popover>
            <PopoverTrigger>
                <AvatarCard
                    avatarUrl={data?.avatarUrl}
                    email={data?.email}
                    firstName={data?.firstName}
                    lastName={data?.lastName}
                />
            </PopoverTrigger>

            <PopoverContent>
                <AvatarPopoverButton
                    variant="destructive"
                    icon={<LogOut />}
                    onClick={() => signOut()}
                >
                    Sair
                </AvatarPopoverButton>
            </PopoverContent>
        </Popover>
    );
}
