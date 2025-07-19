"use client";

import React, { createContext, useContext } from "react";
import { config } from "@/data/config";
import dynamic from "next/dynamic";

import { useLevelStore } from "@/hooks/useLevelStore";

function getLevels(setLevel: (level: number) => void) {
  // Importar componentes dinamicamente para evitar execução de hooks durante o build das páginas de erro
  const HeroSection = dynamic(() => import("@/components/sections/HeroSection").then(mod => mod.HeroSection), { ssr: false });
  const AboutSection = dynamic(() => import("@/components/sections/AboutSection").then(mod => mod.AboutSection), { ssr: false });
  const EligibilitySection = dynamic(() => import("@/components/sections/EligibilitySection").then(mod => mod.EligibilitySection), { ssr: false });
  const RulesSection = dynamic(() => import("@/components/sections/RulesSection").then(mod => mod.RulesSection), { ssr: false });
  const RedirectSection = dynamic(() => import("@/components/sections/RedirectSection"), { ssr: false });
  const Vehicle = dynamic(() => import("../../../Vehicle"), { ssr: false });

  return [
    [
      <HeroSection key="hero" hero={config.content.hero} />,
      <AboutSection
        key="about"
        about={config.content.about}
        benefits={config.content.benefits}
        participation={config.content.participation}
      />
    ],
    [
      <EligibilitySection key="eligibility" eligibilityTitle={config.content.hero.eligibilityTitle} />,
      <RulesSection key="rules" />
    ],
    [
      <RedirectSection key="redirect" onContinue={() => setLevel(3)} />
    ],
    [
      <Vehicle key="vehicle" />
    ],
  ];
}

interface LevelsContextType {
  levels: React.ReactNode[][];
  totalLevels: number;
}

const LevelsContext = createContext<LevelsContextType | undefined>(undefined);

export const LevelsProvider = ({ children }: { children: React.ReactNode }) => {
  const setLevel = useLevelStore((s) => s.setLevel);
  const levels = getLevels(setLevel);
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
