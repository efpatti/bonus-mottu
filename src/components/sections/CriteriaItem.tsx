import React from "react";
import { iconMap } from "./iconMap";

interface CriteriaItemProps {
  item: { icon: string; title: string; text: string };
}

export const CriteriaItem: React.FC<CriteriaItemProps> = ({ item }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center h-full">
    <div className="flex justify-center mb-4">
      {iconMap[item.icon]}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
    <p className="text-gray-600">{item.text}</p>
  </div>
);
