"use client";

import { Section } from "../_components/Section";

export const Tarifs3 = () => {
  return (
    <Section className="pt-[80px] lg:pt-[50px]">
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px]">
        <div className="flex flex-col max-w-5xl mx-auto px-4">
          {/* Titre principal */}
          <div className="text-center">
            <h2 className="text-4xl text-brand-primary font-afrah">
              Stomac Lift
            </h2>
          </div>

          {/* Tableau */}
          <div className="w-full mt-12 overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="font-playfair text-left text-brand-dark text-xl font-bold pb-4">
                    Séance
                  </th>
                  <th className="font-playfair text-right text-brand-dark text-xl font-bold pb-4">
                    Prix
                  </th>
                </tr>
              </thead>
              <tbody className="border-t border-brand-primary">
                <tr>
                  <td className="font-playfair py-4 text-brand-dark font-semibold break-words">
                    1 séance
                  </td>
                  <td className="font-playfair py-4 text-brand-dark font-semibold text-right break-words">
                    140€
                  </td>
                </tr>
                <tr>
                  <td className="font-playfair py-4 text-brand-dark break-words">
                    Cure Express | 7 séances
                  </td>
                  <td className="py-4 text-brand-dark text-right break-words">
                    <div className="flex flex-col items-end">
                      <span className="font-playfair font-semibold">
                        125€/séance
                      </span>
                      <span className="font-playfair text-sm">
                        875€ au total*
                      </span>
                      <span className="font-playfair text-sm text-brand-primary">
                        Économisez 105€*
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="font-playfair py-4 text-brand-dark break-words">
                    Cure Signature | 14 séances
                  </td>
                  <td className="py-4 text-brand-dark text-right break-words">
                    <div className="flex flex-col items-end">
                      <span className="font-playfair font-semibold">
                        110€/séance
                      </span>
                      <span className="font-playfair text-sm">
                        1540€ au total*
                      </span>
                      <span className="font-playfair text-sm text-brand-primary">
                        Économisez 420€*
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 w-full flex flex-col items-center justify-center md:flex-none lg:flex-none gap-4">
            {/* Groupe prix + bouton */}
            <div className="flex flex-col items-center justify-center gap-4 lg:items-center lg:gap-8">
              {/* Texte sous le prix (sur mobile/tablette seulement) */}
              <p className="font-playfair text-brand-dark text-sm text-center block">
                * Possibilité de payer en plusieurs fois sans frais
              </p>

              {/* Bouton */}
              <a
                href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
                target="_blank"
                rel="noopener noreferrer"
                className="h-auto w-auto px-3 lg:px-4 py-1 rounded-full cursor-pointer transition group"
              >
                <button className="font-playfair bg-brand-primary hover:bg-brand-dark text-white font-semibold py-2 px-6 rounded-md transition whitespace-nowrap">
                  Rendez-vous
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
