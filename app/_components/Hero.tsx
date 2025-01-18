import Image from "next/image";

export const Hero = () => {
  return (
    <div>
      <div className="relative h-[807px] w-full">
        <Image
          src="/images/fonds/Fond-1.webp"
          alt="Fond coloré avec des dessins de plantes"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
    </div>
  );
};
