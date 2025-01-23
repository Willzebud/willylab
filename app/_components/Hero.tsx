import Image from "next/image";
import { TiktokIcon } from "./icons/Tiktok";
import { InstaIcon } from "./icons/Insta";
import { YoutubeIcon } from "./icons/Youtube";

export const Hero = () => {
  return (
    <div className="relative w-full h-auto mx-auto mt-5 px-4 md:w-[1200px] md:h-[600px]">
      {/* Image de fond */}
      <div className="absolute inset-0 h-full w-full z-0 overflow-hidden">
        <Image
          src="/images/fonds/Fond-1.webp"
          alt="Fond coloré avec des dessins de plantes"
          fill
          priority
          className="z-0 object-cover"
        />
      </div>

      {/* Contenu du Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center h-auto md:h-full space-y-6">
        {/* Logo et Carte d'information */}
        <div className="flex flex-col md:flex-row items-center md:space-x-32 mb-10 md:mb-6">
          {/* Logo */}
          <div className="flex-shrink-0 mb-6 mt-3 md:mb-0">
            <div className="w-32 h-32 md:w-60 md:h-60 rounded-full border border-black bg-white flex items-center justify-center text-lg md:text-2xl font-semibold">
              Logo
            </div>
          </div>

          {/* Carte d'information */}
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm md:max-w-xl">
            <h2 className="text-lg font-bold text-center md:text-left">
              Ophélie Roche. Ostéopathe
            </h2>
            <p className="text-gray-500 mb-2 text-center md:text-left">
              Santé/beauté
            </p>
            <ul className="text-sm text-center md:text-left">
              <li>🎓 Ostéopathe D.O</li>
              <li>🌿 Soin drainant & anti-cellulite</li>
              <li>🌿 Posturologie</li>
              <li>🏋️‍♀️ Préparatrice physique</li>
            </ul>
            <p className="text-sm text-gray-700 mt-4 text-center md:text-left">
              Résidence la Malounière, bât G, avenue de Verdun, Aubagne 13400
            </p>
            <a
              href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere"
              className="text-blue-600 underline mt-2 block text-center md:text-left"
            >
              www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere
            </a>
          </div>
        </div>

        {/* Icônes sociales */}
        <div className="flex space-x-8 mt-6 pb-6 md:space-x-32 md:pb-0 md:pt-8">
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white border border-black flex items-center justify-center cursor-pointer transition hover:bg-primary">
            <TiktokIcon size={30} />
          </div>
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white border border-black flex items-center justify-center cursor-pointer transition hover:bg-primary">
            <InstaIcon size={30} />
          </div>
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white border border-black flex items-center justify-center cursor-pointer transition hover:bg-primary">
            <YoutubeIcon size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
