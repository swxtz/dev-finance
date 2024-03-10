import { ReactNode } from "react";

interface DataTableHeaderCellProps {
    children:ReactNode;
}

export function DataTableHeaderCell({ children }: DataTableHeaderCellProps) {
  return (
    <div className="text-center text-gray-200 text-base">
      {children}
    </div>
  );
}