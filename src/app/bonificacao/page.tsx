"use client"
import React, { useState } from "react";
import { FiInfo, FiDollarSign, FiCalendar, FiCheckCircle, FiXCircle } from "react-icons/fi";

type TableRow = {
  dias: string;
  recolhido: number;
  pago: number;
  insucesso: string;
};

type BonusRow = {
  tipo: string;
  valor: string;
};

const TabelaBonus: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"main" | "bonus">("main");
  const [showInfo, setShowInfo] = useState(false);

  const mainTableData: TableRow[] = [
    { dias: "1 a 7", recolhido: 1, pago: 2, insucesso: "1/2 até 6 serviços" },
    { dias: "8 a 15", recolhido: 2, pago: 3, insucesso: "1/2 até 6 serviços" },
    { dias: "15 a 30", recolhido: 3, pago: 4, insucesso: "1/2 até 6 serviços" },
    { dias: "30 a 50", recolhido: 4, pago: 5, insucesso: "1/2 até 6 serviços" },
    { dias: "> 50", recolhido: 5, pago: 6, insucesso: "1/2 até 6 serviços" },
  ];

  const bonusTableData: BonusRow[] = [
    { tipo: "6 serviços", valor: "R$ 40,00" },
    { tipo: "serviço extra", valor: "R$ 15,00" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
          <FiDollarSign className="mr-2 text-green-600" />
          Tabela de Bônus
        </h2>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Informações"
        >
          <FiInfo size={20} />
        </button>
      </div>

      {showInfo && (
        <div className="mb-6 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm flex items-start">
          <FiInfo className="mr-2 mt-0.5 flex-shrink-0" />
          <p>
            Esta tabela mostra os critérios para bonificação baseados na quantidade de dias e serviços
            realizados. O bônus é calculado conforme as regras especificadas.
          </p>
        </div>
      )}

      <div className="mb-6 flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("main")}
          className={`px-4 py-2 font-medium flex items-center ${
            activeTab === "main"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <FiCalendar className="mr-2" />
          Critérios
        </button>
        <button
          onClick={() => setActiveTab("bonus")}
          className={`px-4 py-2 font-medium flex items-center ${
            activeTab === "bonus"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <FiDollarSign className="mr-2" />
          Valores
        </button>
      </div>

      {activeTab === "main" ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-green-50 text-green-800">
                <th className="px-6 py-3 text-left font-semibold">QTD Dias</th>
                <th className="px-6 py-3 text-left font-semibold">Serviço Recolhido</th>
                <th className="px-6 py-3 text-left font-semibold">Serviço Pago</th>
                <th className="px-6 py-3 text-left font-semibold">Insucesso</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mainTableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">{row.dias}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FiCheckCircle className="text-green-500 mr-2" />
                      {row.recolhido}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FiCheckCircle className="text-green-500 mr-2" />
                      {row.pago}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FiXCircle className="text-red-500 mr-2" />
                      {row.insucesso}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-green-50 text-green-800">
                <th className="px-6 py-3 text-left font-semibold">Tipo</th>
                <th className="px-6 py-3 text-left font-semibold">Valor Bônus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bonusTableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap capitalize">{row.tipo}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-green-600">
                    {row.valor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 text-sm text-gray-500">
        <p>Atualizado em: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default TabelaBonus;