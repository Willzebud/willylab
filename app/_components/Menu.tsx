export const Menu = () => {
  return (
    <>
      {/* Barre verticale (Desktop) */}
      <div className="hidden md:block absolute left-16 top-0 h-full w-[1px] bg-black" />

      {/* Barre horizontale (Mobile) */}
      <div className="block md:hidden absolute top-16 left-0 w-full h-[1px] bg-black" />

      {/* Menu */}
      <div className="absolute md:top-1/2 md:left-4 top-4 right-4 transform md:-translate-y-1/2">
        <div className="w-8 h-8 md:w-10 md:h-10 p-1 mb-2 border border-black md:border md:border-transparent rounded-full cursor-pointer transition md:hover:border-transparent hover:border-primary group flex flex-col items-center justify-center">
          <div className="w-1 h-1 mb-1 rounded-full bg-black group-hover:bg-primary" />
          <div className="w-1 h-1 mb-1 rounded-full bg-black group-hover:bg-primary" />
          <div className="w-1 h-1 rounded-full bg-black group-hover:bg-primary" />
        </div>
      </div>
    </>
  );
};
