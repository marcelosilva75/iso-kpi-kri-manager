// src/services/kpiKriService.ts
import { supabase } from "@/lib/supabaseClient";

export const addKpi = async (data: any) => {
  return await supabase.from("kpi").insert([data]);
};

export const addKri = async (data: any) => {
  return await supabase.from("kri").insert([data]);
};

export const listKpis = async () => {
  return await supabase.from("kpi").select("*").order("created_at", { ascending: false });
};

export const listKris = async () => {
  return await supabase.from("kri").select("*").order("created_at", { ascending: false });
};
