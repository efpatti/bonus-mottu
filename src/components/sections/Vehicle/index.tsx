import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { FaMotorcycle as MotorcycleIcon, FaCar as CarIcon } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { useVehicleSelection } from "@/hooks/useVehicleSelection";

type VehicleType = "motorcycle" | "car";

interface BonusRulesProps {
  type: VehicleType;
}


const BonusRules: React.FC<BonusRulesProps> = ({ type }) => {
  const motorcycleRules = {
    baseBonus: "R$ 40 for reaching 5 daily services",
    additionalBonus: "R$ 15 for each additional service beyond 5",
    specialCases: [
      "Pickup services that were avoided due to customer payment count double",
      "On-site resolved swap services count double"
    ],
    penaltyFactors: [
      "Exceeding 90 km/h: lose daily bonus",
      "Exceeding 120 km/h: lose half of monthly bonus",
      "Unjustified absences: lose biweekly bonus",
      "Being late or logging off early: penalty on daily bonus (best bonus day of biweek)",
      "Tool loss: deduction from bonus if positive"
    ]
  };

  const carRules = {
    baseBonus: "R$ 40 for reaching 6 daily services",
    additionalBonus: "R$ 15 for each additional service beyond 6",
    specialCases: [
      "Pickup services that were avoided due to customer payment count double"
    ],
    penaltyFactors: [
      "Exceeding speed limits: penalty on bonus",
      "Unjustified absences: lose biweekly bonus",
      "Being late or logging off early: penalty on daily bonus",
      "Tool loss: deduction from bonus if positive"
    ]
  };

  const rules = type === "motorcycle" ? motorcycleRules : carRules;

  return (
    <div className="p-6 rounded-xl shadow-md border border-gray-100">
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-xl font-bold text-gray-900">Bonus Calculation</h2>
          <p className="text-gray-600 mt-2">
            {type === "motorcycle" ? (
              <>
                You receive <span className="font-bold text-green-600">R$ 40</span> for reaching the daily goal of 5 services. 
                Each additional service adds <span className="font-bold text-green-600">R$ 15</span> to your bonus.
              </>
            ) : (
              <>
                You receive <span className="font-bold text-green-600">R$ 40</span> for reaching the daily goal of 6 services. 
                Each additional service adds <span className="font-bold text-green-600">R$ 15</span> to your bonus.
              </>
            )}
          </p>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-semibold text-gray-900">Example Calculation</h3>
          <div className="mt-2 bg-gray-50 p-4 rounded-lg">
            {type === "motorcycle" ? (
              <>
                <p>5 services (goal) → <span className="font-bold">R$ 40</span></p>
                <p>+ 4 additional services → <span className="font-bold">R$ 60</span> (4 × R$ 15)</p>
                <p className="font-bold text-green-600 border-t border-gray-200 pt-2 mt-2">Total for 9 services: R$ 100</p>
              </>
            ) : (
              <>
                <p>6 services (goal) → <span className="font-bold">R$ 40</span></p>
                <p>+ 4 additional services → <span className="font-bold">R$ 60</span> (4 × R$ 15)</p>
                <p className="font-bold text-green-600 border-t border-gray-200 pt-2 mt-2">Total for 10 services: R$ 100</p>
              </>
            )}
          </div>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-semibold text-gray-900">Special Cases</h3>
          <ul className="mt-2 space-y-2 list-disc pl-5">
            {rules.specialCases.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <FiAlertTriangle className="text-yellow-500" />
            Factors That Discount the Bonus
          </h3>
          <ul className="mt-2 space-y-2 list-disc pl-5">
            {rules.penaltyFactors.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function Vehicle() {
  const selectedVehicle = useVehicleSelection((s) => s.selectedVehicle);
  return (
    <div className="flex flex-col w-full items-center py-8 px-4 min-h-screen">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Bonus Rules</h1>
        <p className="text-gray-600 mb-8 text-center">
          Understand how your bonus is calculated and what factors can affect it
        </p>
        <Tabs value={selectedVehicle} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100">
            <TabsTrigger 
              value="motorcycle" 
              className="flex items-center gap-2 data-[state=active]:bg-green-600 data-[state=active]:text-white cursor-pointer"
              onClick={() => useVehicleSelection.getState().setSelectedVehicle("motorcycle")}
            >
              <MotorcycleIcon /> Motorcycle
            </TabsTrigger>
            <TabsTrigger 
              value="car" 
              className="flex items-center gap-2 data-[state=active]:bg-green-600 data-[state=active]:text-white cursor-pointer"
              onClick={() => useVehicleSelection.getState().setSelectedVehicle("car")}
            >
              <CarIcon /> Car
            </TabsTrigger>
          </TabsList>
          <TabsContent value="motorcycle" className="mt-6">
            <BonusRules type="motorcycle" />
          </TabsContent>
          <TabsContent value="car" className="mt-6">
            <BonusRules type="car" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Vehicle;