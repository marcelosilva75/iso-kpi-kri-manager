// src/pages/kpi.tsx
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Layout from "@/components/Layout";

export default function KPIsPage() {
  const [nome, setNome] = useState("");
  const [kpis, setKpis] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  const fetchKPIs = async () => {
    const { data } = await supabase.from("kpi").select("*").order("nome", { ascending: true });
    setKpis(data || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome) return;

    if (editId) {
      await supabase.from("kpi").update({ nome }).eq("id", editId);
      setEditId(null);
    } else {
      await supabase.from("kpi").insert([{ nome }]);
    }

    setNome("");
    fetchKPIs();
  };

  const handleEdit = (id: string, nomeAtual: string) => {
    setEditId(id);
    setNome(nomeAtual);
  };

  const handleDelete = async (id: string) => {
    await supabase.from("kpi").delete().eq("id", id);
    fetchKPIs();
  };

  useEffect(() => {
    fetchKPIs();
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">KPIs</h1>

      <form onSubmit={handleSubmit} className="mb-4 space-x-2">
        <input
          type="text"
          placeholder="Nome do KPI"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editId ? "Atualizar" : "Cadastrar"}
        </button>
      </form>

      <ul className="space-y-2">
        {kpis.map((kpi) => (
          <li key={kpi.id} className="p-2 bg-gray-100 rounded flex justify-between items-center">
            <span>{kpi.nome}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(kpi.id, kpi.nome)}
                className="px-2 py-1 bg-yellow-400 rounded text-sm"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(kpi.id)}
                className="px-2 py-1 bg-red-500 text-white rounded text-sm"
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
