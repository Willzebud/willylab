import Image from "next/image";
import { Section } from "../_components/Section";

export const CelluliteSection = () => {
  return (
    <Section className="bg-brand-cream py-12 px-4">
      <div className="max-w-7xl mx-autorelative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px]">
        {/* Partie Titre + Texte */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary w-full lg:w-1/2">
            C’est quoi la cellulite ?
          </h2>
          <div className="text-brand-dark text-lg text-justify md:text-xl w-full lg:w-1/2 leading-relaxed">
            <p className="mb-4">
              La cellulite est formée par une augmentation de cellules
              graisseuses qui compriment le réseau sanguin et entraînent un
              capitonnage de la peau.
            </p>
            <p className="text-sm md:text-base text-brand-dark text-justify">
              Le Massage GAD® permet d’activer la circulation sanguine et
              lymphatique pour éliminer et déstocker les amas graisseux. En
              conséquence, l’aspect de la cellulite diminue, en plus d’une perte
              de centimètres au niveau de la taille des hanches et des cuisses.
            </p>
          </div>
        </div>

        {/* Partie Images + Légendes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image 1 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/ImgMa/MA3.webp"
              alt="Schéma d'une peau avec cellulite : les adipocytes en excès compriment le réseau sanguin et créent un capitonnage de la peau"
              width={400}
              height={300}
              className="w-full h-auto max-w-sm"
            />
            <h3 className="mt-4 font-semibold text-brand-dark">
              Une peau avec de la cellulite
            </h3>
            <p className="text-sm text-brand-dark mt-2">
              Les adipocytes en excès
              <br />
              compriment le réseau sanguin
              <br />
              et entraînent un capitonnage de la peau.
            </p>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/ImgMa/MA4.webp"
              alt="Schéma d'une peau normale et lisse : les adipocytes sont peu nombreux et le réseau sanguin circule librement"
              width={400}
              height={300}
              className="w-full h-auto max-w-sm"
            />
            <h3 className="mt-4 font-semibold text-brand-dark">
              Une peau normale et lisse
            </h3>
            <p className="text-sm text-brand-dark mt-2">
              Les adipocytes sont en quantité limitée,
              <br />
              le flux sanguin est facilité.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
