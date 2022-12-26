export function Pokeball() {
  return (
    <div className="flex flex-col flex-1 min-w-8 w-8 min-h-8 h-8 group-hover:-rotate-[60deg] z-10 group-focus:-rotate-[60deg] transition-all duration-300 ease-in-out">
      <div className="bg-pokeball-red h-[45%] rounded-t-full"></div>
      <div className="bg-pokeball-gray h-[10%] flex items-center justify-center">
        <span className="bg-white text-pokeball-gray p-1 rounded-full border-[2px]  z-10 border-pokeball-gray">
        </span>
      </div>
      <div className="bg-pokeball-white h-[45%] rounded-b-full"></div>
    </div>
  );
}
