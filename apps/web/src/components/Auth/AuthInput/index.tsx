import { InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

export function AuthInput({ placeholder }: AuthInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor="email"
                className="font-semibold text-base text-ui-text"
            >
                            E-mail
            </label>
            <div className="px-4 py-3 bg-zinc-500 rounded-[8px] w-72 md:w-[500px]">
                <input
                    type="email"
                    id="email"
                    placeholder={placeholder}
                    className="bg-inherit outline-none w-full"
                    // {...register("email")}
                />
            </div>
            {/* {errors.email && (
                <ValidationErrorMessage>
                    {errors.email.message}
                </ValidationErrorMessage>
            )} */}
        </div>
    );

}