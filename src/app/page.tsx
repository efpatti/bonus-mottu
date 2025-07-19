"use client";
import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EligibilitySection } from "@/components/sections/EligibilitySection";
import { RulesSection } from "@/components/sections/RulesSection";
import { RedirectSection } from "@/components/sections/RedirectSection";
import { Veiculo } from "@/components/sections/Veiculo";
import { useLevelStore } from "@/hooks/useLevelStore";
import { NavigationButtons } from "@/components/NavigationButtons";


const levels = [
  [<HeroSection key="hero" />, <AboutSection key="about" />],
  [<EligibilitySection key="eligibility" />, <RulesSection key="rules" />],
  [<RedirectSection key="redirect" />],
  [<Veiculo key="veiculo" />], // Assuming Veiculo is a section you want to include
];



export default function Home() {
  const currentLevel = useLevelStore((s) => s.currentLevel);
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
