import React from "react";
import { useVehicleSelection, VehicleType } from "@/hooks/useVehicleSelection";


interface RedirectSectionProps {
  onContinue?: () => void;
}

export default function RedirectSection({ onContinue }: RedirectSectionProps) {
  const setSelectedVehicle = useVehicleSelection((s) => s.setSelectedVehicle);

  const handleSelect = (vehicle: VehicleType) => {
    setSelectedVehicle(vehicle);
    if (onContinue) onContinue();
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Qual o seu veículo?</h1>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            className={`cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 ${useVehicleSelection.getState().selectedVehicle === "car" ? "opacity-75" : ""}`}
            onClick={() => handleSelect("motorcycle")}
          >
            Moto
          </button>
          <button
            className={`cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 ${useVehicleSelection.getState().selectedVehicle === "motorcycle" ? "bg-green-600/50" : ""}`}
            onClick={() => handleSelect("car")}
          >
            Carro
          </button>
        </div>
      </div>
    </section>
  );
}

