"use client";

export const QuiJeSuis = () => {
  // État pour suivre la catégorie activ

  return (
    <div className="relative z-0 w-full h-auto mx-auto mt-5 lg:mt-0 overflow-hidden xl:w-[80%] lg:h-[600px] max-w-[95%] bg-[#4A9599] flex flex-col justify-between">
      {/* Contenu */}
      <div className="relative z-10 pb-20 flex flex-col h-full">
        {/* Titre "Avis patients" */}
        <div className="inline-block bg-white px-6 py-2 rounded-md mt-10 ml-4 max-w-fit">
          <h2 className="font-bold text-5xl text-left text-[#023333] leading-none">
            Qui je suis
          </h2>
        </div>
      </div>
    </div>
  );
};
