import React from "react";
import { config } from "@/data/config";

export const RedirectSection = () => {
  const { redirect } = config.content;
  const motoLink = redirect.moto[0].href;
  const carroLink = redirect.carro[0].href;
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Qual o seu veículo?</h1>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a href={motoLink} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow hover:shadow-md">
            Moto
          </a>
          <a href={carroLink} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow hover:shadow-md">
            Carro
          </a>
        </div>
      </div>
    </section>
  );
};
