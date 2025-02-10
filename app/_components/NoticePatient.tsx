"use client";

export const NoticePatient = () => {
  return (
    <div className="relative z-0 w-full h-auto mx-auto mt-5 lg:mt-0 overflow-hidden xl:w-[80%] lg:h-[600px] max-w-[95%] bg-[#4A9599]">
      {/* Image de fond */}
      <div className="absolute inset-0 h-full w-full z-0 overflow-hidden bg-[#4A9599]"></div>

      {/* Contenu */}
      <div className="relative z-10 pb-20 px-4 sm:px-12">
        {/* Titre "Avis patients" */}
        <div className="inline-block bg-white px-6 py-2 rounded-md mt-10">
          <h2 className="font-bold text-4xl text-left text-[#023333]">
            Avis patients
          </h2>
        </div>

        {/* ✅ Filtre des catégories centré et adaptatif */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-6 text-white font-semibold text-center">
          <span className="text-white border-b-2 border-white pb-1 cursor-pointer">
            Ostéopathie Adulte
          </span>
          <span className="hidden sm:inline border-l-2 border-white h-6"></span>
          <span className="text-white opacity-70 cursor-pointer hover:opacity-100 transition">
            Pédiatrie
          </span>
          <span className="hidden sm:inline border-l-2 border-white h-6"></span>
          <span className="text-white opacity-70 cursor-pointer hover:opacity-100 transition">
            Drainage
          </span>
          <span className="hidden sm:inline border-l-2 border-white h-6"></span>
          <span className="text-white opacity-70 cursor-pointer hover:opacity-100 transition">
            Haptonomie
          </span>
        </div>

        {/* Conteneur des avis */}
        <div className="relative mt-6 h-auto max-h-[500px] overflow-y-scroll pr-4">
          {/* ✅ Cartes des avis corrigées */}
          {["Laura.M", "Jean.P", "Sophie.L", "Alice.K"].map((name, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-md shadow-md mb-4 flex flex-col items-center text-center w-full"
            >
              {/* Cercle pour la photo */}
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gray-400 mb-3"></div>

              {/* Nom de la personne */}
              <p className="font-bold text-lg">{name}</p>

              {/* ✅ Texte des avis bien centré et fluide sans débordement */}
              <p className="text-gray-800 text-lg mt-2 w-full max-w-full overflow-hidden break-words">
                {"<<"} Blablablablablablablablablablablablablablablablablablabla
                blablablablablablablablablablablablablabla
                blablablablablablablablablablablablablabla {">>"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
