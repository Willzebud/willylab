"use client";

import Image from "next/image";

export const QuiJeSuis = () => {
  return (
    <div className="relative z-0 w-full h-auto mx-auto mt-5 lg:mt-0 overflow-hidden xl:w-[80%] lg:h-[600px] max-w-[95%] bg-[#4A9599] flex flex-col justify-between">
      {/* Contenu */}
      <div className="relative z-10 pb-20 flex flex-col h-full">
        {/* Titre "Qui je suis" */}
        <div className="inline-block bg-white px-6 py-2 rounded-md mt-10 ml-4 max-w-fit">
          <h2 className="font-bold text-5xl text-left text-[#023333] leading-none">
            Qui je suis
          </h2>
        </div>

        {/* Section avec l'image et la description */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-8 px-6 lg:px-12 mt-10 lg:mt-20">
          {/* Photo de la cliente */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/images/Sis.webp"
              alt="Photo de profil d'Ophélie l'Ostéopathe"
              fill
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
              className="object-cover"
            />
          </div>

          {/* Bloc de texte */}
          <div className="bg-white p-6 rounded-md shadow-lg max-w-2xl">
            <p className="text-lg text-gray-800 leading-relaxed text-wrap break-words">
              {"<<"} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin sit amet odio eget justo efficitur fermentum vel in sapien.
              Suspendisse potenti. Mauris eu urna at erat tempus dapibus ut non
              felis. In et metus sed felis sodales ultricies a eget augue.
              Integer aliquet vestibulum arcu at cursus. {" >>"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
