// src/components/EvolucaoForm.tsx
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function EvolucaoForm() {
  const [empresas, setEmpresas] = useState<any[]>([]);
  const [kpis, setKpis] = useState<any[]>([]);
  const [kris, setKris] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    empresa_id: "",
    kpi_id: "",
    kri_id: "",
    valor: "",
    data_registro: "",
    observacao: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data: empresas } = await supabase.from("empresa").select("*");
      const { data: kpis } = await supabase.from("kpi").select("*");
      const { data: kris } = await supabase.from("kri").select("*");

      setEmpresas(empresas || []);
      setKpis(kpis || []);
      setKris(kris || []);
    };
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from("evolucao_kpi_kri").insert([formData]);
    if (error) {
      alert("Erro ao salvar evolução: " + error.message);
    } else {
      alert("Evolução registrada com sucesso!");
      setFormData({
        empresa_id: "",
        kpi_id: "",
        kri_id: "",
        valor: "",
        data_registro: "",
        observacao: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-md max-w-2xl mx-auto mt-4 space-y-4">
      <h2 className="text-xl font-bold text-gray-700">Registrar Evolução</h2>

      <select name="empresa_id" value={formData.empresa_id} onChange={handleChange} className="w-full border p-2 rounded">
        <option value="">Selecione a Empresa</option>
        {empresas.map((e) => (
          <option key={e.id} value={e.id}>{e.nome}</option>
        ))}
      </select>

      <select name="kpi_id" value={formData.kpi_id} onChange={handleChange} className="w-full border p-2 rounded">
        <option value="">Selecione um KPI</option>
        {kpis.map((kpi) => (
          <option key={kpi.id} value={kpi.id}>{kpi.nome}</option>
        ))}
      </select>

      <select name="kri_id" value={formData.kri_id} onChange={handleChange} className="w-full border p-2 rounded">
        <option value="">Selecione um KRI</option>
        {kris.map((kri) => (
          <option key={kri.id} value={kri.id}>{kri.nome}</option>
        ))}
      </select>

      <input type="number" step="0.01" name="valor" placeholder="Valor" value={formData.valor} onChange={handleChange} className="w-full border p-2 rounded" />
      
      <input type="date" name="data_registro" value={formData.data_registro} onChange={handleChange} className="w-full border p-2 rounded" />

      <textarea name="observacao" placeholder="Observações" value={formData.observacao} onChange={handleChange} className="w-full border p-2 rounded" />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Registrar
      </button>
    </form>
  );
}
