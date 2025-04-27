"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const EffetsPositifs = () => {
  return (
    <Section className="lg:pt-[0px]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Titre */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            Les actions de ce massage minceur
          </h2>

          {/* Grille des 3 actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-2 lg:pt-16">
            {/* Action 1 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/ImgMa/MA6.webp"
                alt="Illustration de la circulation sanguine"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="font-semibold text-brand-dark mb-2">
                Une action sur la circulation sanguine
              </h3>
              <p className="text-sm text-brand-dark">
                et donc une amélioration du retour veineux et lymphatique.
                <br />
                <span className="font-semibold">
                  Une perte moyenne de 0,5cm par séance liée au drainage de
                  l’eau.
                </span>
              </p>
            </div>

            {/* Action 2 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/ImgMa/MA7.webp"
                alt="Illustration des cellules graisseuses"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="font-semibold text-brand-dark mb-2">
                Une action sur les cellules graisseuses
              </h3>
              <p className="text-sm text-brand-dark">
                qui va les vidanger et les éliminer en profondeur grâce au
                phénomène de lipolyse. On observe aussi une réduction moyenne de
                33% de l’hypoderme.
                <br />
                <span className="font-semibold">
                  À partir de la 5ème séance, la peau se lisse.
                </span>
              </p>
            </div>

            {/* Action 3 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/ImgMa/MA8.webp"
                alt="Illustration des cellules fibroblastes"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="font-semibold text-brand-dark mb-2">
                Une action sur les fibroblastes,
              </h3>
              <p className="text-sm text-brand-dark">
                les cellules qui sont responsables de la production des fibres
                d’élastine et de collagène.
                <br />
                <span className="font-semibold">
                  La peau est tonifiée et plus ferme, la peau d’orange diminue.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
