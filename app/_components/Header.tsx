import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="sticky py-4">
      <Section className="flex items-center justify-between space-between space-between">
        {/* Cercle à gauche */}
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-black bg-transparent cursor-pointer transition hover:border-primary hover:bg-primary" />

        {/* Boutons Tarifs et Rendez-vous */}
        <div className="flex items-center space-x-2 mr-12 md:mr-0">
          <div className="h-auto w-auto border border-black px-3 md:px-4 py-1 rounded-lg cursor-pointer transition hover:border-primary group">
            <p className="text-black group-hover:text-primary">Tarifs</p>
          </div>
          <div className="h-auto w-auto border border-black px-3 md:px-4 py-1 rounded-lg cursor-pointer transition hover:border-primary group">
            <p className="text-black group-hover:text-primary">Rendez-vous</p>
          </div>
        </div>
      </Section>
    </header>
  );
};
