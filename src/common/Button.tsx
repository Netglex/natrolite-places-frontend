import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`press flex h-10 items-center gap-2 rounded-full bg-sky-200 px-4 hover:bg-sky-300 dark:bg-sky-800 dark:hover:bg-sky-600 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
