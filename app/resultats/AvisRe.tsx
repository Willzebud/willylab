"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Section } from "../_components/Section";
import { useState } from "react";

export const AvisRe = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // <= ici
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel); // <= ici
    },
  });

  const data = [
    {
      name: "Anaïs",
      quote:
        "Je voulais juste te dire un énorme merci. Tes soins m’apportent bien plus que ce que j’espérais : du réconfort, de la confiance en moi, et un vrai moment de pause dans mon quotidien de folie. Tu es solaire et passionnée, ça se sent et ça fait tellement de bien ! Je recommande ton travail et ton énergie les yeux fermés. ",
    },
    {
      name: "Noémie",
      quote:
        " Je viens vers toi pour te faire un petit retour sur les soins que tu pratiques sur moi depuis 1 mois. Je me sens beaucoup plus légère, jai une meilleure circulation sanguine, je maigris sans faire d'effort. j'ai aussi vu une différence au niveau de la qualité de ma peau qui devient de plus en plus lisse au fur et à mesure et en plus c'est toujours un pur moment de détente. Je te remercie pour tous tes conseils et ton professionnalisme ! Je recommande ! ",
    },

    {
      name: "Camille",
      quote:
        "Je suis à un peu plus de la moitié de ma cure et c’est bluffant ! Ma peau est beaucoup plus ferme, mes jambes sont nettement moins lourdes et mes capitons se sont vraiment atténués. Même mon entourage me dit que je suis plus “affinée” sans que je leur en parle ! Merci pour ton accompagnement et ta bonne humeur à chaque séance, hâte de voir les résultats finaux ! ",
    },
    {
      name: "Béatrice",
      quote:
        "Je vous remercie beaucoup pour votre gentillesse et bienveillance. j'adore venir, même si le soin n'est pas des plus agréable, je ne me suis jamais sentie aussi légère ! D'ailleurs, on vient juste parce quil est efficace pas forcément parce quil est doux... Cest sur quil faut aimer les massages vivifiants mais on alie l'agréable en votre compagnie et l'utile en perdant des centimètres ! Je conseille ce soin les yeux fermés !",
    },
    {
      name: "Manon",
      quote:
        "Petit retour concernant la cure à mi parcours et je vois déjà une belle différence ! Je trouve ma peau beaucoup plus lisse surtout au niveau des cuisses, la cellulite commence à bien partir, et mes jambes sont beaucoup moins gonflée et mes chevilles également avec ma rétention d'eau. J'arrive à remettre des pantalons qui étaient trop petit il y a encore 1 mois ! Hâte d'avoir les résultats de fin de cure.",
    },
    {
      name: "Léa",
      quote:
        "Juste un petit retour sur la cure, cest incroyable jétais vraiment mitigé à lidée de me dire qu'une simple méthode de massage puisse faire perdre des cm. Et tu m'as prouvé le contraire, et motivé encore plus dans ma perte de poids. Merci pour tes conseils, hâte de finir la cure et obtenir le résultat final !",
    },
    {
      name: "Juliette",
      quote:
        "Je voulais te remercier pour tout ce que tu as fait pour moi depuis que je suis venue pour la première fois te voir. Au delà d'être une super professionnelle (je pèse mes mots tu as sauvé mon dos, t'es trop forte) tu es vraiment une très belle personne, tu es toujours souriante, à l'écoute. tu es vraiment géniale !! Tes vraiment mon RDV hapiness de la semaine et jadore venir te voir !",
    },
    {
      name: "Marion",
      quote:
        "Merci pour ton accompagnement si bienveillant! Cest bien plus qu'un massage c'est un véritable coaching que tu nous proposes avec beaucoup de professionnalisme et de douceur! Une bulle de bien-être quand on veut se retrouver! MERCI",
    },
    {
      name: "Claire",
      quote:
        "Coucou ! Je voulais prendre le temps de te remercier pour tout ce que tu m’apportes à chaque séance. Tu es bien plus qu’une praticienne : tu es une vraie bouffée d’air frais, toujours douce, toujours à l’écoute. Grâce à toi je ressens un vrai mieux-être, autant dans mon corps que dans ma tête. C’est devenu mon petit rituel bonheur de la semaine ! Merci infiniment pour ta bienveillance et ta générosité. ",
    },
    {
      name: "Sophie",
      quote:
        "Je voulais absolument te faire un retour parce que je suis trop contente ! Depuis que j’ai commencé les séances avec toi, j’ai beaucoup moins de rétention d’eau, mes jambes sont moins gonflées et j’ai même perdu quelques centimètres sans rien changer d’autre ! Je me sens tellement mieux dans mon corps. Merci pour ta douceur et tes précieux conseils, tu es au top !",
    },
    {
      name: "Zoé",
      quote:
        "Je voulais te dire que tu es une perle rare. À chaque séance, tu réussis à me redonner de l’énergie et à me reconnecter à mon corps avec douceur et respect. Ce n’est pas juste un soin, c’est un moment de vraie reconnexion avec soi-même, grâce à toi. Merci pour ton écoute, ton professionnalisme et ta lumière !",
    },
  ];

  return (
    <Section className="py-20 bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-10">
        {/* Témoignages (slider) */}
        <div className="relative max-w-2xl w-full px-4 flex flex-col items-center">
          {/* Navigation + Name */}
          <div className="flex items-center justify-center gap-6 mb-8">
            {/* Flèche précédente */}
            <button
              onClick={() => instanceRef.current?.prev()}
              className="text-6xl text-brand-primary hover:text-brand-dark transition"
            >
              ‹
            </button>

            {/* Name */}
            <div className="font-afrah text-brand-primary text-4xl font-semibold min-w-[150px] text-center">
              {data[currentSlide]?.name}
            </div>

            {/* Flèche suivante */}
            <button
              onClick={() => instanceRef.current?.next()}
              className="text-6xl text-brand-primary hover:text-brand-dark transition"
            >
              ›
            </button>
          </div>

          {/* Slides */}
          <div ref={sliderRef} className="keen-slider w-full">
            {data.map((avis, index) => (
              <div
                key={index}
                className="keen-slider__slide flex flex-col items-center text-center gap-4 px-4"
              >
                <p className="font-playfair text-2xl italic text-brand-dark max-w-xl text-justify">
                  “{avis.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
