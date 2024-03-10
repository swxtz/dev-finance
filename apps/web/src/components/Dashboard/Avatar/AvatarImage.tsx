"use client";

import * as AvatarRadix from "@radix-ui/react-avatar";
import { User } from "lucide-react";
interface AvatarImageProps {
    avatarUrl: string | undefined;
}

export function AvatarImage({ avatarUrl }: AvatarImageProps) {
  return (
    <AvatarRadix.Root>
      <AvatarRadix.Image
        className="size-10 rounded-full"
        src={avatarUrl}
        alt="Foto de usuario"
      />
      <AvatarRadix.Fallback>
        <User className="size-6" />
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  );
}
