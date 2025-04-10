// src/components/EvolucaoGrafico.tsx
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import { supabase } from "@/lib/supabaseClient";

interface Evolucao {
  id: string;
  empresa_id: string;
  kpi_id: string | null;
  kri_id: string | null;
  valor: number;
  data: string;
}

export default function EvolucaoGrafico({ empresaId }: { empresaId: string }) {
  const [dados, setDados] = useState<Evolucao[]>([]);

  useEffect(() => {
    const fetchDados = async () => {
      const { data, error } = await supabase
        .from("evolucao_kpi_kri")
        .select("*")
        .eq("empresa_id", empresaId)
        .order("data", { ascending: true });

      if (data) setDados(data);
      if (error) console.error("Erro ao buscar evolução:", error.message);
    };

    fetchDados();
  }, [empresaId]);

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="valor" stroke="#8884d8" name="Valor" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
