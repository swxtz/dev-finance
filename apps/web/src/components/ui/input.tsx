import * as React from "react";

import { cn } from "@/lib/utils";
import { FormField, FormItem, FormControl } from "./form";
import { Control } from "react-hook-form";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface InputControlledProps extends InputProps {
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any, any>;
}



const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

const InputControlled = (props: InputControlledProps) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field, ...props}) => (
        <FormItem>
          <FormControl>
            <div className="flex flex-col">
              <Input
                type="text"
                placeholder="Descrição"
                className="outline-none"
                {...field}
                {...props}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default {
  Uncontrolled: Input,
  Controlled: React.memo(InputControlled)
};
