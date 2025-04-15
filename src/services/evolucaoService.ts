import { supabase } from "@/lib/supabaseClient";

export type EvolucaoKpiKri = {
  data: string;
  valor: number;
  empresa_id: string;
};

export const listarEvolucaoKpiKri = async (empresaId: string): Promise<{ data: string[]; valores: number[] }> => {
  const { data, error } = await supabase
    .from("evolucao_kpi_kri")
    .select("data, valor")
    .eq("empresa_id", empresaId)
    .order("data", { ascending: true });

  if (error) throw error;

  return {
    data: data.map((item) => item.data),
    valores: data.map((item) => item.valor),
  };
};
