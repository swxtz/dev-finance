"use client";

import { Loader2 } from "lucide-react";
import { FormButton } from "../FormButton";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export function VerifyAccountForm() {
    const [loading, isLoading] = useState(false);
    const params = useSearchParams();

    const email = params.get("email");
    const code = params.get("token");

    return (
        <form className="flex flex-col mx-auto">
            <div className="flex flex-col gap-4 items-center">
                {/* field name */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="email"
                        className="font-semibold text-base text-ui-text"
                    >
                        Email
                    </label>
                    <div className="px-4 py-3 bg-zinc-500 rounded-[8px] w-72 md:w-[500px]">
                        <input
                            type="email"
                            id="email"
                            placeholder="john.doe@example.com"
                            className="bg-inherit outline-none w-full"
                            // {...register("firstName")}
                        />
                    </div>
                    {/* {errors.firstName && (
                        <ValidationErrorMessage>
                            {errors.firstName.message}
                        </ValidationErrorMessage>
                    )} */}
                </div>

                {/* field's codes */}

                
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="email"
                        className="font-semibold text-base text-ui-text"
                    >
                        Codígo de verificação
                    </label>
                    <div className="px-4 py-3 bg-zinc-500 rounded-[8px] w-72 md:w-[500px]">
                        <input
                            type="text"
                            id="email"
                            placeholder="ABCDEF"
                            className="bg-inherit outline-none w-full text-center"
                            // {...register("firstName")}
                        />
                    </div>
                    {/* {errors.firstName && (
                        <ValidationErrorMessage>
                            {errors.firstName.message}
                        </ValidationErrorMessage>
                    )} */}
                </div>

                {loading ? (
                    <FormButton>
                        <Loader2 className="animate-spin mx-auto" />
                    </FormButton>
                ) : (
                    <FormButton>Verificar conta</FormButton>
                )}
            </div>
        </form>
    );
}
