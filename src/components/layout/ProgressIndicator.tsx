
"use client";
import React from "react";
import { useLevelStore, LevelState } from "@/hooks/useLevelStore";

interface ProgressIndicatorProps {
  totalLevels: number;
}
export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ totalLevels }) => {
  const currentLevel = useLevelStore((state: LevelState) => state.currentLevel);
  const setLevel = useLevelStore((state: LevelState) => state.setLevel);
  return (
    <div
      className="flex items-center justify-center gap-2 sm:gap-4 mb-0 px-2 sm:px-4 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 overflow-hidden"
      style={{ minWidth: 0 }}
    >
      {Array.from({ length: totalLevels }).map((_, i) => (
        <span key={i} className="flex items-center z-20 m-1">
          <button
            className={`cursor-pointer progress-step flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-full transition-all duration-300 text-md sm:text-sm ${
              i === currentLevel
                ? "bg-green-600 text-white scale-110"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setLevel(i)}
          >
            {i + 1}
          </button>
          {i < totalLevels - 1 && (
            <div className="h-px w-4 sm:w-6 bg-gray-300" />
          )}
        </span>
      ))}
    </div>
  );
}
