import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    mode: string;
}

export function Button({}: IButton) {
  return <button></button>;
}
