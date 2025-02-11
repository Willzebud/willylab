"use client";

import { useState } from "react";
import Image from "next/image";
import avisData from "../data/avis.json";

// Définition des types
type AvisCategorie =
  | "Ostéopathie Adulte"
  | "Pédiatrie"
  | "Drainage"
  | "Haptonomie";

type Avis = {
  nom: string;
  photo: string;
  commentaire: string;
};

type AvisData = {
  [key in AvisCategorie]: Avis[];
};

export const NoticePatient = () => {
  // État pour suivre la catégorie active
  const [categorieActive, setCategorieActive] =
    useState<AvisCategorie>("Ostéopathie Adulte");

  // Forcer le typage de avisData
  const typedAvisData: AvisData = avisData;

  return (
    <div className="relative z-0 w-full h-auto mx-auto mt-5 lg:mt-0 overflow-hidden xl:w-[80%] lg:h-[600px] max-w-[95%] bg-[#4A9599] flex flex-col justify-between">
      {/* Contenu */}
      <div className="relative z-10 pb-20 flex flex-col h-full">
        {/* Titre "Avis patients" */}
        <div className="inline-block bg-white px-6 py-2 rounded-md mt-10 ml-4 mr-4 max-w-fit">
          <h2 className="font-bold text-5xl text-left text-[#023333] leading-none">
            Avis patients
          </h2>
        </div>

        {/* Menu de sélection des catégories */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-6 text-white font-semibold text-center">
          {Object.keys(typedAvisData).map((categorie) => (
            <span
              key={categorie}
              className={`cursor-pointer pb-1 ${
                categorieActive === categorie
                  ? "border-b-2 border-white"
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setCategorieActive(categorie as AvisCategorie)}
            >
              {categorie}
            </span>
          ))}
        </div>

        {/* ✅ Conteneur des avis - Ajustement de la hauteur */}
        <div className="relative flex-grow flex flex-col justify-start items-center lg:pb-20 px-4 sm:px-24 mt-6 min-h-[500px] max-h-[550px] overflow-y-auto">
          {typedAvisData[categorieActive]?.map((avis, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-md shadow-md mb-4 flex flex-col items-center text-center w-full"
            >
              {/* Photo de la personne */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden">
                <Image
                  src={avis.photo}
                  alt={avis.nom}
                  fill
                  sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                  className="object-cover"
                />
              </div>

              {/* Nom de la personne */}
              <p className="font-bold text-lg">{avis.nom}</p>

              {/* Commentaire */}
              <p className="text-gray-800 text-lg mt-2 w-full max-w-full overflow-hidden break-words">
                {"<<"} {avis.commentaire} {">>"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
