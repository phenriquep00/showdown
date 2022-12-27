import { AnchorHTMLAttributes } from "react";

interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

export function Link(props: ILink) {
  return (
    <a className="underline font-semibold hover:cursor-pointer" {...props}>
      {props.text}
    </a>
  );
}
