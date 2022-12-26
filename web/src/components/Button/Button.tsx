import { ButtonHTMLAttributes } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { TertiaryButton } from "./TertiaryButton";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  as: "primary" | "secondary" | "tertiary";
}

export function Button(props: IButton) {
  return (
    <button {...props}>
      {props.as === "primary" ? (
        <PrimaryButton />
      ) : props.as === "secondary" ? (
        <SecondaryButton />
      ) : props.as === "tertiary" ? (
        <TertiaryButton />
      ) : null}
    </button>
  );
}
