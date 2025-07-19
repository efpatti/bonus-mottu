"use client";
import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { config } from "@/data/config";
import { AboutSection } from "@/components/sections/AboutSection";
import { EligibilitySection } from "@/components/sections/EligibilitySection";
import { RulesSection } from "@/components/sections/RulesSection";
import RedirectSection from "@/components/sections/RedirectSection";
import Vehicle from "@/components/sections/Vehicle";
import { useLevelStore } from "@/hooks/useLevelStore";
import { NavigationButtons } from "@/components/layout/NavigationButtons";



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
      <Vehicle key="vehiVehicle" />
    ],
  ];
}



export default function Home() {
  const currentLevel = useLevelStore((s) => s.currentLevel);
  const setLevel = useLevelStore((s) => s.setLevel);
  const levels = getLevels(setLevel);
  return (
    <>
      <main className="bg-white pb-16 flex min-h-screen flex-col items-center justify-center">
        <div className="level-container w-full">
          {levels.map((sectionList, idx) => (
            <div
              key={idx}
              className={`level ${currentLevel === idx ? "block" : "hidden"}`}
            >
              {sectionList}
            </div>
          ))}
        </div>
        <NavigationButtons />
      </main>
    </>
  );
}
