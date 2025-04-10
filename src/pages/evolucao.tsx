// src/pages/evolucao.tsx
import EvolucaoForm from "@/components/EvolucaoForm";

export default function EvolucaoPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Gestão de Evolução - KPI / KRI</h1>
      <EvolucaoForm />
    </div>
  );
}
