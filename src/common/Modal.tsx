import FocusTrap from "focus-trap-react";
import {
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
} from "react";
import Button from "./Button";

export interface ModalProps {
  confirmText?: string;
  cancelText?: string;
  onConfirm?: MouseEventHandler<HTMLButtonElement> | undefined;
  onCancel?: MouseEventHandler<HTMLButtonElement> | undefined;
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

export default function Modal(props: ModalProps) {
  if (!props.visibility) return <></>;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur dark:bg-white/25"
      onKeyDown={(e) => {
        if (e.code === "Escape") props.setVisibility(false);
      }}
    >
      <FocusTrap
        focusTrapOptions={{
          initialFocus: "#confirm-button",
        }}
      >
        <section className="flex h-48 max-w-xs flex-col overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
          <div className="grow p-8 ">{props.children}</div>
          <div className="flex justify-end gap-4 bg-zinc-200 p-4 dark:bg-zinc-900">
            <Button
              onClick={(e) => {
                props.setVisibility(false);
                props.onCancel && props.onCancel(e);
              }}
            >
              {props.cancelText}
            </Button>
            <Button
              id="confirm-button"
              onClick={(e) => {
                props.setVisibility(false);
                props.onConfirm && props.onConfirm(e);
              }}
            >
              {props.confirmText}
            </Button>
          </div>
        </section>
      </FocusTrap>
    </div>
  );
}
