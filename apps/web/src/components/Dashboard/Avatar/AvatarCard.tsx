"use client";

import { ChevronDown } from "lucide-react";
import { AvatarImage } from "./AvatarImage";

interface AvatarCardProps {
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    avatarUrl: string | undefined;
}

export function AvatarCard({
    avatarUrl,
    email,
    firstName,
    lastName,
}: AvatarCardProps) {
    return (
        <div className="flex flex-row gap-3 items-center">
            <div className="flex flex-col gap-1">
                <span className="text-end text-sm font-medium text-stone-100">
                    {firstName} {lastName}
                </span>
                <span className="text-zinc-200 text-sm">{email}</span>
            </div>

            <AvatarImage avatarUrl={avatarUrl} />
            <ChevronDown className="size-6 text-stone-200" />
        </div>
    );
}
