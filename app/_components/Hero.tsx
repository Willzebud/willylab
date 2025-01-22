import Image from "next/image";
import { TiktokIcon } from "./icons/Tiktok";
import { InstaIcon } from "./icons/Insta";
import { YoutubeIcon } from "./icons/Youtube";

export const Hero = () => {
  return (
    <div className="relative w-[1200px] h-[600px] mx-auto mt-5">
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Logo et Carte d'information */}
        <div className="flex items-center space-x-32 mb-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full border border-black bg-white flex items-center justify-center text-2xl font-semibold">
              Logo
            </div>
          </div>

          {/* Carte d'information */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
            <h2 className="text-lg font-bold text-left">
              Ophélie Roche. Ostéopathe
            </h2>
            <p className="text-gray-500 mb-2 text-left">Santé/beauté</p>
            <ul className="text-sm text-left">
              <li>🎓 Ostéopathe D.O</li>
              <li>🌿 Soin drainant & anti-cellulite</li>
              <li>🌿 Posturologie</li>
              <li>🏋️‍♀️ Préparatrice physique</li>
            </ul>
            <p className="text-sm text-gray-700 mt-4 text-left">
              Résidence la Malounière, bât G, avenue de Verdun, Aubagne 13400
            </p>
            <a
              href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere"
              className="text-blue-600 underline mt-2 block text-left"
            >
              www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere
            </a>
          </div>
        </div>

        {/* Icônes sociales */}
        <div className="flex space-x-20 mt-10">
          <div className="w-20 h-20 rounded-full bg-white border border-black flex items-center justify-center cursor-pointer transition hover:bg-primary">
            <TiktokIcon size={50} />
          </div>
          <div className="w-20 h-20 rounded-full bg-white  border border-black flex items-center justify-center cursor-pointer transition hover:bg-primary">
            <InstaIcon size={50} />
          </div>
          <div className="w-20 h-20 rounded-full bg-white  border border-black flex items-center justify-center cursor-pointer transition hover:bg-primary">
            <YoutubeIcon size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};
