"use client";

import React, { createContext, useContext } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EligibilitySection } from "@/components/sections/EligibilitySection";
import { RulesSection } from "@/components/sections/RulesSection";
import { RedirectSection } from "@/components/sections/RedirectSection";
import { Veiculo } from "@/components/sections/Veiculo";

const levels = [
  [<HeroSection key="hero" />, <AboutSection key="about" />],
  [<EligibilitySection key="eligibility" />, <RulesSection key="rules" />],
  [<RedirectSection key="redirect" />],
  [<Veiculo key="veiculo" />], // Assuming Veiculo is a section you want to include
];

interface LevelsContextType {
  levels: React.ReactNode[][];
  totalLevels: number;
}

const LevelsContext = createContext<LevelsContextType | undefined>(undefined);

export const LevelsProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LevelsContext.Provider value={{ levels, totalLevels: levels.length }}>
      {children}
    </LevelsContext.Provider>
  );
};

export function useLevels() {
  const ctx = useContext(LevelsContext);
  if (!ctx) throw new Error("useLevels must be used within a LevelsProvider");
  return ctx;
}
