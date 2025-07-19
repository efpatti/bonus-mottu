
"use client"
import Image from "next/image";
import { ProgressIndicator } from "@/components/layout/ProgressIndicator";

interface NavbarProps {
  totalLevels: number;
}


const Navbar: React.FC<NavbarProps> = ({ totalLevels }) => {
  return (
    <nav className="bg-zinc-900 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between w-full">
          {/* Logo à esquerda */}
          <div className="flex items-center flex-shrink-0">
            <Image src="/mottu_logo.png" alt="Mottu Logo" className="h-8 w-auto" width={100} height={32} />
          </div>
          <div className="hidden sm:flex flex-1 justify-end items-center">
            <ProgressIndicator totalLevels={totalLevels} />
          </div>
          <div className="flex sm:hidden flex-1 justify-center items-center">
            <ProgressIndicator totalLevels={totalLevels} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;