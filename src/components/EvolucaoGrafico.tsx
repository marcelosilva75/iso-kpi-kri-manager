// src/components/EvolucaoGrafico.tsx
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
  data: string; // Certifique-se de que `data` seja uma string representando a data
}

export default function EvolucaoGrafico({ empresaId }: { empresaId: string }) {
  const [dados, setDados] = useState<Evolucao[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchDados = async () => {
      setCarregando(true);
      setErro(null); // Resetando erro anterior
      try {
        const { data, error } = await supabase
          .from("evolucao_kpi_kri")
          .select("*")
          .eq("empresa_id", empresaId)
          .order("data", { ascending: true });

        if (error) throw error;
        setDados(data || []);
      } catch (error: any) {
        setErro("Erro ao buscar dados de evolução: " + error.message);
      } finally {
        setCarregando(false);
      }
    };

    fetchDados();
  }, [empresaId]);

  // Se estiver carregando ou ocorrer erro, exibe a mensagem
  if (carregando) {
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <span>Carregando...</span>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="w-full h-96 flex justify-center items-center text-red-500">
        <span>{erro}</span>
      </div>
    );
  }

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

}
