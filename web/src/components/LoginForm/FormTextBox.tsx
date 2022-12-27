import { InputHTMLAttributes } from "react";

interface IFormTextBox extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor: string;
  name: string;
  id?: string;
  placeholder?: string;
}

export function FormTextBox({
  label,
  htmlFor,
  name,
  id,
  placeholder,
}: IFormTextBox) {
  return (
    <div className="flex flex-col">
      <label className="z-10 self-end bg-white max-w-fit text-black font-medium px-2 rounded" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="-mt-2 bg-[#afafaf] text-[#0c6163] placeholder-[#0c6163] border-2 border-white rounded px-3 py-2"
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
