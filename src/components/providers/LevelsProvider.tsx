"use client";

import React, { createContext, useContext } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { config } from "@/data/config";
import { AboutSection } from "@/components/sections/AboutSection";
import { EligibilitySection } from "@/components/sections/EligibilitySection";
import { RulesSection } from "@/components/sections/RulesSection";
import RedirectSection from "@/components/sections/RedirectSection";
import Vehicle from "@/components/sections/Vehicle";

import { useLevelStore } from "@/hooks/useLevelStore";

function getLevels(setLevel: (level: number) => void) {
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
