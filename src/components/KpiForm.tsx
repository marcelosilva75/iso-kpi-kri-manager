// src/components/KpiForm.tsx
import { useState, useEffect } from "react";
import { addKpi } from "../services/kpiKriService"; // Caminho relativo


interface Kpi {
  id?: string;
  titulo: string;
  descricao: string;
}

export default function KpiForm({
  onSave,
  initialData,
}: {
  onSave?: () => void;
  initialData?: Kpi | null;
}) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitulo(initialData.titulo);
      setDescricao(initialData.descricao);
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo) return;

    if (initialData?.id) {
      await addKpi({ id: initialData.id, titulo, descricao, update: true });
    } else {
      await addKpi({ titulo, descricao });
    }

    setTitulo("");
    setDescricao("");
    if (onSave) onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold">{initialData ? "Editar KPI" : "Cadastrar KPI"}</h2>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {initialData ? "Atualizar" : "Salvar"}
      </button>
    </form>
  );
}
