//import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="sticky py-4">
      <div className="flex items-center justify-between px-12">
        <div className="w-10 h-10 rounded-full border-2 border-black bg-transparent cursor-pointer transition hover:border-primary hover:bg-primary" />
        <div className="flex items-center space-x-12">
          <div className="h-auto w-auto border-2 border-black px-4 py-1 rounded-lg cursor-pointer transition hover:border-primary group">
            <p className="text-black group-hover:text-primary">Tarifs</p>
          </div>
          <div className="h-auto w-auto border-2 border-black px-4 py-1 rounded-lg cursor-pointer transition hover:border-primary group">
            <p className="text-black group-hover:text-primary">Rendez-vous</p>
          </div>
        </div>
      </div>
    </header>
  );
};
