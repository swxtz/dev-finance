"use client";

import { FormHTMLAttributes } from "react";
import { FormButton } from "../FormButton/FormButton";
import { FormInput } from "../FormInput/FormInput";

interface NewTransactionFormProps extends FormHTMLAttributes<HTMLFormElement> {
}

export function NewTransactionForm({...rest }: NewTransactionFormProps) {
  return (
    <form {...rest}>
      <div className="w-full">
        <div className="flex flex-col gap-3">
          <FormInput placeholder="Descrição" type="text" />
          <FormInput
            placeholder="Valor"
            type="text"
            className="mt-4"
          />
        </div>
        <span className="text-xs flex items-center justify-center w-full mt-2 mb-4 text-gray-400">
                    Use o sinal - (negativo) para despesas e , (vírgula para
                    casas decimais)
        </span>
        <div className="">
          <FormInput placeholder="DD/MM/YYYY" type="date" />
        </div>
      </div>

      <div className="flex justify-center  gap-9 mx-auto mt-14 w-full">
        <FormButton color="red">Cancelar</FormButton>
        <FormButton color="green">Enviar</FormButton>
      </div>
    </form>
  );
}
