import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const className = clsx(
    "py-4 px-3 bg-cyan-500 hover:bg-cyan-300 transition-colors focus:ring-2 ring-white rounded font-semibold text-black text-sm w-full"
  );

  return <Comp className={className}>{children}</Comp>;
}
