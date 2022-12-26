import { useRef, useState } from "react";

export function PrimaryButton() {
  const pokeballRef = useRef<any>();

  return (
    <div
      ref={pokeballRef}
      className="flex group flex-col flex-1 w-12 h-12 hover:-rotate-90 transition-all duration-300 ease-in-out"
    >
      <div className="bg-pokeball-red h-[45%] rounded-t-full"></div>
      <div className="bg-pokeball-gray h-[10%] flex items-center justify-center">
        <span className="bg-white max-w-0 max-h-0 overflow-hidden group-hover:overflow-visible group-hover:max-h-min group-hover:max-w-min group-hover:animate-pokeball text-pokeball-gray p-1 rounded-full border-[2px]  z-10 border-pokeball-gray whitespace-nowrap">
          click here
        </span>
      </div>
      <div className="bg-pokeball-white h-[45%] rounded-b-full"></div>
    </div>
  );
}
