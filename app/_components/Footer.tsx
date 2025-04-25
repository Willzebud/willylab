"use client";

import { Vague } from "./icons/Vague";

export const Footer = () => {
  return (
    <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[100%] max-w-[100%] min-h-[50px]">
      <div className="h-[200px]">
        <Vague className="w-full h-full" />
      </div>
      <div className="relative bg-brand-dark h-[100px]" />
    </div>
  );
};
