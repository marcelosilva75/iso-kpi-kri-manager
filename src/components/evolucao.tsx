// src/pages/evolucao.tsx
import Layout from "@/components/Layout";
import EvolucaoGrafico from "@/components/EvolucaoGrafico";

export default function EvolucaoPage() {
  const empresaId = "ID_DA_EMPRESA"; // Substitua pelo ID da empresa ou use um selector

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Evolução de KPI e KRI</h1>
      <EvolucaoGrafico empresaId={empresaId} />
    </Layout>
  );
}
