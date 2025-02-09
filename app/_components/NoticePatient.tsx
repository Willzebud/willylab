"use client";

export const NoticePatient = () => {
  return (
    <div className="relative z-0 w-full h-auto mx-auto mt-5 lg:mt-0 overflow-hidden xl:w-[80%] lg:h-[600px] max-w-[95%] bg-[#4A9599]">
      {/* Image de fond */}
      <div className="absolute inset-0 h-full w-full z-0 overflow-hidden bg-[#4A9599]"></div>

      {/* Contenu */}
      <div className="relative z-10 pb-20 px-6 lg:px-12">
        {/* Titre "Avis patients" */}
        <div className="inline-block bg-white px-6 py-2 rounded-md mt-10">
          <h2 className="font-bold text-4xl text-left text-[#023333]">
            Avis patients
          </h2>
        </div>

        {/* Filtre des catégories */}
        <div className="flex justify-start items-center gap-6 mt-6 text-white font-semibold">
          <span className="text-white border-b-2 border-white pb-1 cursor-pointer">
            Ostéopathie pour adulte
          </span>
          <span className="border-l-2 border-white h-6"></span>
          <span className="text-white opacity-70 cursor-pointer hover:opacity-100 transition">
            Pédiatrie
          </span>
          <span className="border-l-2 border-white h-6"></span>
          <span className="text-white opacity-70 cursor-pointer hover:opacity-100 transition">
            Drainage
          </span>
          <span className="border-l-2 border-white h-6"></span>
          <span className="text-white opacity-70 cursor-pointer hover:opacity-100 transition">
            Haptonomie
          </span>
        </div>

        {/* Conteneur des avis */}
        <div className="relative mt-6 h-auto max-h-[500px] overflow-y-scroll pr-4">
          {/* Avis 1 */}
          <div className="bg-white p-6 rounded-md shadow-md mb-4">
            <p className="text-gray-800 text-lg">
              {"<<"} Blablablablablablablablablablablablablablablablablablabla
              blablablablablablablablablablablablablabla
              blablablablablablablablablablablablablabla {">>"}
            </p>
            <p className="font-bold mt-4">Laura.M</p>
          </div>

          {/* Avis 2 */}
          <div className="bg-white p-6 rounded-md shadow-md mb-4">
            <p className="text-gray-800 text-lg">
              {"<<"} Blablablablablablablablablablablablablablablablablablabla
              blablablablablablablablablablablablablabla
              blablablablablablablablablablablablablabla {">>"}
            </p>
            <p className="font-bold mt-4">Jean.P</p>
          </div>

          {/* Avis 3 */}
          <div className="bg-white p-6 rounded-md shadow-md mb-4">
            <p className="text-gray-800 text-lg">
              {"<<"} Blablablablablablablablablablablablablablablablablablabla
              blablablablablablablablablablablablablabla
              blablablablablablablablablablablablablabla {">>"}
            </p>
            <p className="font-bold mt-4">Sophie.L</p>
          </div>
          {/* Avis 3 */}
          <div className="bg-white p-6 rounded-md shadow-md mb-4">
            <p className="text-gray-800 text-lg">
              {"<<"} Blablablablablablablablablablablablablablablablablablabla
              blablablablablablablablablablablablablabla
              blablablablablablablablablablablablablabla {">>"}
            </p>
            <p className="font-bold mt-4">Sophie.L</p>
          </div>
        </div>
      </div>
    </div>
  );
};
