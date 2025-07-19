"use client";
import { useLevelStore } from "@/hooks/useLevelStore";
import { Button } from "@/components/ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const levels = [0, 1, 2]; // Replace with your actual levels

export const NavigationButtons: React.FC = () => {
  const currentLevel = useLevelStore((s) => s.currentLevel);
  const setLevel = useLevelStore((s) => s.setLevel);

  return (
    <nav
      aria-label="Navegação de etapas"
      className="flex justify-center mt-10 px-4"
    >
      <div className="flex gap-6 bg-white rounded-xl shadow-lg py-4 px-8 border border-gray-100">
        <Button
          type="button"
          variant="outline"
          className="flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-black bg-white border border-black hover:bg-green-50 hover:text-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setLevel(currentLevel - 1)}
          disabled={currentLevel === 0}
          aria-label="Voltar para etapa anterior"
        >
          <FaChevronLeft className="text-green-600" />
          Voltar
        </Button>
        <Button
          type="button"
          className="flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setLevel(currentLevel + 1)}
          disabled={currentLevel >= levels.length - 1}
          aria-label="Avançar para próxima etapa"
        >
          Continuar
          <FaChevronRight className="text-white" />
        </Button>
      </div>
    </nav>
  );
};
