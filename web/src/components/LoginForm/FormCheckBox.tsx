import { InputHTMLAttributes } from "react";

interface IFormCheckBox extends InputHTMLAttributes<HTMLInputElement> {}

export function FormCheckBox(props: IFormCheckBox) {
  return (
    <input
      {...props}
      className="self-start w-4 h-4 text-[#0c6163] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      type="checkbox"
    />
  );
}
