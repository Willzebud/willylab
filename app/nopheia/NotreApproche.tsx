"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const NotreApproche = () => {
  return (
    <Section>
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-16">
          Notre approche
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[
            {
              src: "/images/ImgNo/NO1.webp",
              alt: "Icône naturelle",
              title: "100 % naturelle :",
              text: "Chaque soin, chaque geste, chaque recommandation s’inscrit dans une approche respectueuse du corps et de la peau.",
            },
            {
              src: "/images/ImgNo/NO2.webp",
              alt: "Icône inclusive",
              title: "Inclusive et universelle :",
              text: "Nopheïa s’adresse à toutes les femmes, quel que soit leur âge, leur morphologie, leur type de peau ou leur histoire.",
            },
            {
              src: "/images/ImgNo/NO3.webp",
              alt: "Icône cœur et corps",
              title: "Expérience corps & cœur :",
              text: "Nous ne croyons pas aux injonctions. Nous croyons aux rituels qui reconnectent, aux gestes qui libèrent, aux soins qui révèlent.",
            },
            {
              src: "/images/ImgNo/NO4.webp",
              alt: "Icône bien-être",
              title: "Le bien-être comme socle :",
              text: "Nos techniques et massages allient science du corps et bienfaits émotionnels, pour un mieux-être durable.",
            },
          ].map(({ src, alt, title, text }, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row items-center gap-4 text-center sm:text-left md:text-left"
            >
              <Image
                src={src}
                alt={alt}
                width={200}
                height={200}
                className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px]"
              />
              <p className="text-brand-dark text-lg md:text-xl leading-relaxed text-justify sm:text-left md:text-left">
                <span className="font-semibold">{title}</span> {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
