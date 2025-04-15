// src/components/KpiForm.tsx
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function KriForm({
  editId,
  onSave,
}: {
  editId: string | null;
  onSave: () => void;
}) {
  const [nome, setNome] = useState("");
  
  // Se estiver editando um KRI, pegar os dados para edição
  useEffect(() => {
    const fetchKri = async () => {
      if (editId) {
        const { data, error } = await supabase.from("kri").select("*").eq("id", editId).single();
        if (data) {
          setNome(data.nome);
        } else {
          console.error(error?.message);
        }
      }
    };
    fetchKri();
  }, [editId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome) return;

    // Se há um editId, atualiza, caso contrário, cria um novo KRI
    if (editId) {
      await supabase.from("kri").update({ nome }).eq("id", editId);
      onSave();
    } else {
      await supabase.from("kri").insert([{ nome }]);
      onSave();
    }

    setNome(""); // Limpa o formulário após salvar
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-x-2">
      <input
        type="text"
        placeholder="Nome do KRI"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {editId ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  );
}
