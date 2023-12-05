// FoundLogo.tsx

import React from "react";
import { lusitana } from "@/app/ui/fonts";
import { PuzzlePieceIcon } from "@heroicons/react/24/outline";

const FoundLogo: React.FC = () => {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none `}
      aria-label="Logo">
      <PuzzlePieceIcon className="h-6 md:h-12 w-6 md:w-12 rotate-[30deg]" />
      <p className="text-xl md:text-2xl font-extrabold">Found</p>
    </div>
  );
};

export default FoundLogo;
