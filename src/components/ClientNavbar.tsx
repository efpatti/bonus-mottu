"use client";
import Navbar from "@/components/ui/Navbar";
import { useLevels } from "@/components/providers/LevelsProvider";

const ClientNavbar = () => {
  const { totalLevels } = useLevels();
  return <Navbar totalLevels={totalLevels} />;
};

export default ClientNavbar;
