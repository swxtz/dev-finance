import { ReactNode } from "react";

interface DataTableCellProps {
    children: ReactNode;
    isNegative?: boolean;
    isCurrency?: boolean;
}

export function DataTableCell({ children, isNegative }: DataTableCellProps) {
  return (
    <div className={isNegative ? "text-center text-red-500 text-base" : "text-center text-green-500 text-base"}>
      {children}
    </div>
        
  );
}