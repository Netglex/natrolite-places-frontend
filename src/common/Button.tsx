import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`press flex h-10 items-center gap-2 rounded-full bg-sky-200 px-4 hover:bg-sky-300 focus:outline focus:outline-2 focus:outline-sky-400 dark:bg-sky-700 dark:hover:bg-sky-600 dark:focus:outline-sky-300 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
