"use client"
import { useLevelStore } from "@/hooks/useLevelStore";

// Define your levels array here or import it if it exists elsewhere
const levels = [0, 1, 2]; // Replace with your actual levels

export const NavigationButtons: React.FC = () => {
  const currentLevel = useLevelStore((s) => s.currentLevel);
  const setLevel = useLevelStore((s) => s.setLevel);
  return (
    <div className="flex justify-center space-x-4 mt-8 px-4">
      {currentLevel > 0 && (
        <button
          className="cursor-pointer px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm bg-gray-200 hover:bg-gray-300 text-gray-700"
          onClick={() => setLevel(currentLevel - 1)}
        >
          Voltar
        </button>
      )}
      {currentLevel < levels.length - 1 && (
        <button
          className="cursor-pointer px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm bg-green-600 hover:bg-green-700 text-white"
          onClick={() => setLevel(currentLevel + 1)}
        >
          Continuar
        </button>
      )}
    </div>
  );
};