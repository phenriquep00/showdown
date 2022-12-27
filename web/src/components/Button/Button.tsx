import { ButtonHTMLAttributes } from "react";
import { Pokeball } from "../Pokeball/Pokeball";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "primary" | "secondary" | "tertiary";
}

export function Button(props: IButton) {
  return (
    <button
      {...props}
      className="flex flex-row gap-2 justify-center items-center group text-lg font-semibold"
    >
      <Pokeball />
      <span className="flex border-2 bg-white text-black rounded px-4 -ml-5 group-hover:bg-opacity-50 group-focus:bg-opacity-80">
        {props.children}
      </span>
    </button>
  );
}
