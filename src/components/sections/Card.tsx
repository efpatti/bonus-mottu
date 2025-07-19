import React from "react";
import { iconMap } from "./iconMap";

interface CardProps {
  title: string;
  items: { icon: string; text: string }[];
}

export const Card: React.FC<CardProps> = ({ title, items }) => (
  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
    <ul className="space-y-3 text-gray-600 text-left">
      {items.map((item, idx) => (
        <li className="flex items-start" key={idx}>
          {iconMap[item.icon]}
          <span className="text-base md:text-lg">{item.text}</span>
        </li>
      ))}
    </ul>
  </div>
);
