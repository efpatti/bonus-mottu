import React from "react";
import { config } from "@/data/config";
import { iconMap } from "./iconMap";
import { CriteriaItem } from "./CriteriaItem";

export const RulesSection = () => {
  const { criteria } = config.content;
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full bg-white" id="regras">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{criteria.title}</h2>
          <p className="text-gray-500 mt-3 text-lg max-w-3xl mx-auto">{criteria.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.items.map((item, idx) => (
            <CriteriaItem item={item} key={idx} />
          ))}
        </div>
        <div className="mt-12 bg-green-50 p-8 rounded-xl border border-green-200">
          <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
            {iconMap["info-circle"]}
            {criteria.important.title}
          </h3>
          <p className="text-green-700 text-lg">{criteria.important.text}</p>
        </div>
      </div>
    </section>
  );
};
