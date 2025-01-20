export const Menu = () => {
  return (
    <div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <div className="w-8 h-auto p-1 mb-2 border-2 border-black cursor-pointer transition hover:border-primary group flex flex-col items-center justify-center rounded-lg">
          <div className="w-1 h-1 m-1 rounded-full bg-black group-hover:bg-primary" />
          <div className="w-1 h-1 m-1 rounded-full bg-black group-hover:bg-primary" />
          <div className="w-1 h-1 m-1 rounded-full bg-black group-hover:bg-primary" />
        </div>
      </div>
      <div className="absolute left-16 top-0 h-full w-[1px] bg-black" />
    </div>
  );
};
