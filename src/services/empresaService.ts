import { supabase } from "@/lib/supabaseClient";

export type Empresa = {
  id: string;
  nome: string;
  cnpj: string;
  setor: string;
};

export const listarEmpresas = async (): Promise<Empresa[]> => {
  const { data, error } = await supabase.from("empresas").select("*");
  if (error) throw error;
  return data as Empresa[];
};

export const cadastrarEmpresa = async (empresa: Omit<Empresa, "id">): Promise<void> => {
  const { error } = await supabase.from("empresas").insert([empresa]);
  if (error) throw error;
};

export const excluirEmpresa = async (empresaId: string): Promise<void> => {
  const { error } = await supabase.from("empresas").delete().eq("id", empresaId);
  if (error) throw error;
};


// Cadastra uma nova empresa
export async function cadastrarEmpresa(novaEmpresa: Omit<Empresa, "id" | "data_cadastro">): Promise<Empresa> {
  const { data, error } = await supabase.from("empresa").insert(novaEmpresa).select().single();
  if (error) throw new Error(error.message);
  return data as Empresa;
}
