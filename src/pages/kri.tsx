// src/pages/kri.tsx
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Layout from "@/components/Layout";
import KriForm from "@/components/KriForm";

export default function KRIsPage() {
  const [kris, setKris] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  
  const fetchKRIs = async () => {
    const { data } = await supabase.from("kri").select("*").order("nome", { ascending: true });
    setKris(data || []);
  };

  const handleEdit = (id: string, nomeAtual: string) => {
    setEditId(id);
  };

  const handleDelete = async (id: string) => {
    await supabase.from("kri").delete().eq("id", id);
    fetchKRIs();
  };

  useEffect(() => {
    fetchKRIs();
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">KRIs</h1>

      <KriForm editId={editId} onSave={fetchKRIs} />

      <ul className="space-y-2">
        {kris.map((kri) => (
          <li key={kri.id} className="p-2 bg-gray-100 rounded flex justify-between items-center">
            <span>{kri.nome}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(kri.id, kri.nome)}
                className="px-2 py-1 bg-yellow-400 rounded text-sm"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(kri.id)}
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
