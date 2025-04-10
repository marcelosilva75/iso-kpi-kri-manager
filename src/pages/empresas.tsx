import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Layout from "@/components/Layout";
import GraficoEvolucao from "@/components/GraficoEvolucao";

export default function EmpresasPage() {
  const [nome, setNome] = useState("");
  const [empresas, setEmpresas] = useState<any[]>([]);
  const [editandoId, setEditandoId] = useState<number | null>(null);

  const fetchEmpresas = async () => {
    const { data } = await supabase.from("empresa").select("*");
    setEmpresas(data || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome) return;

    if (editandoId) {
      await supabase.from("empresa").update({ nome }).eq("id", editandoId);
    } else {
      await supabase.from("empresa").insert([{ nome }]);
    }

    setNome("");
    setEditandoId(null);
    fetchEmpresas();
  };

  useEffect(() => {
    fetchEmpresas();
  }, []);

  const dadosExemplo = [
    { data: "2024-01", valor: 40 },
    { data: "2024-02", valor: 60 },
    { data: "2024-03", valor: 75 },
    { data: "2024-04", valor: 90 },
  ];

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Empresas</h1>

      <form onSubmit={handleSubmit} className="mb-4 space-x-2">
        <input
          type="text"
          placeholder="Nome da Empresa"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editandoId ? "Atualizar" : "Cadastrar"}
        </button>
        {editandoId && (
          <button
            type="button"
            onClick={() => {
              setEditandoId(null);
              setNome("");
            }}
            className="ml-2 text-sm text-gray-600 underline"
          >
            Cancelar edição
          </button>
        )}
      </form>

      <ul className="space-y-2 mb-6">
        {empresas.map((empresa) => (
          <li key={empresa.id} className="p-2 bg-gray-100 rounded flex justify-between items-center">
            <span>{empresa.nome}</span>
            <button
              onClick={() => {
                setNome(empresa.nome);
                setEditandoId(empresa.id);
              }}
              className="text-blue-600 underline text-sm"
            >
              Editar
            </button>
          </li>
        ))}
      </ul>

      <GraficoEvolucao dados={dadosExemplo} titulo="Evolução Exemplo da Empresa" />
    </Layout>
  );
}

