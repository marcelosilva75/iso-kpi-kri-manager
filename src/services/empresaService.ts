// services/empresaService.ts
import { supabase } from "@/lib/supabaseClient";

export interface Empresa {
  id: string;
  nome: string;
  cnpj?: string;
  setor?: string;
  data_cadastro?: string;
}

// Lista todas as empresas
export async function listarEmpresas(): Promise<Empresa[]> {
  const { data, error } = await supabase.from("empresa").select("*").order("data_cadastro", { ascending: false });
  if (error) throw new Error(error.message);
  return data as Empresa[];
}

// Cadastra uma nova empresa
export async function cadastrarEmpresa(novaEmpresa: Omit<Empresa, "id" | "data_cadastro">): Promise<Empresa> {
  const { data, error } = await supabase.from("empresa").insert(novaEmpresa).select().single();
  if (error) throw new Error(error.message);
  return data as Empresa;
}
