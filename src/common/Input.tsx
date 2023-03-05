import { ChangeEventHandler } from "react";

export interface InputProps {
  className?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
}

export default function Input(props: InputProps) {
  return (
    <input
      className={`first-letter flex h-10 items-center gap-2 rounded-full bg-white px-4 hover:bg-zinc-50 focus:outline focus:outline-2 focus:outline-sky-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:focus:outline-sky-600 ${props.className}`}
      type="text"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}
