import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
     
}

export function Button({}: IButton) {
  return <button></button>;
}
