// src/pages/kpi.tsx
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import KpiForm from "@/components/KpiForm";
import { listKpis } from "@/services/kpiKriService";
import { supabase } from "@/lib/supabaseClient";

export default function KPIsPage() {
  const [kpis, setKpis] = useState<any[]>([]);
  const [editData, setEditData] = useState<any | null>(null);

  const fetchKPIs = async () => {
    const { data } = await listKpis();
    setKpis(data || []);
    setEditData(null); // Limpa o formulário após salvar/editar
  };

  const handleDelete = async (id: string) => {
    await supabase.from("kpi").delete().eq("id", id);
    fetchKPIs();
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">KPIs</h1>

      <KpiForm onSave={fetchKPIs} initialData={editData} />

      <ul className="space-y-2 mt-4">
        {kpis.map((kpi) => (
          <li key={kpi.id} className="p-2 bg-gray-100 rounded flex justify-between items-center">
            <div>
              <p className="font-semibold">{kpi.titulo}</p>
              <p className="text-sm text-gray-600">{kpi.descricao}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setEditData(kpi)}
                className="px-3 py-1 bg-yellow-400 text-black rounded text-sm"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(kpi.id)}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
