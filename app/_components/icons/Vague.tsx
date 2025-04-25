import { ComponentPropsWithoutRef } from "react";

export const Vague = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        d="M0 419L21.5 415.5C43 412 86 405 128.8 412.2C171.7 419.3 214.3 440.7 257.2 452C300 463.3 343 464.7 385.8 453.8C428.7 443 471.3 420 514.2 408.3C557 396.7 600 396.3 642.8 416.7C685.7 437 728.3 478 771.2 480.8C814 483.7 857 448.3 878.5 430.7L900 413L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
        fill="#a45c40"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />
    </svg>
  );
};
