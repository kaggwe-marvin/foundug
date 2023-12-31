// FoundLogo.tsx

import React from "react";
import { lusitana } from "@/app/ui/fonts";
import { PlayIcon } from "@heroicons/react/24/outline";

const Backbtn: React.FC = () => {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none `}
      aria-label="Logo">
      <PlayIcon className="h-8  w-8  rotate-[60deg]" />
    </div>
  );
};

export default Backbtn;
