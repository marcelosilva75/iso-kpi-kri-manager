import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Layout from "@/components/Layout";

export default function HomePage() {
  const [empresaCount, setEmpresaCount] = useState(0);
  const [kpiCount, setKpiCount] = useState(0);
  const [kriCount, setKriCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const { count: empresa } = await supabase
        .from("empresa")
        .select("*", { count: "exact", head: true });

      const { count: kpi } = await supabase
        .from("kpi")
        .select("*", { count: "exact", head: true });

      const { count: kri } = await supabase
        .from("kri")
        .select("*", { count: "exact", head: true });

      setEmpresaCount(empresa || 0);
      setKpiCount(kpi || 0);
      setKriCount(kri || 0);
    };

    fetchCounts();
  }, []);

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-2">Bem-vindo ao Gerenciador ISO 27001</h2>
      <p className="mb-4">Este sistema permite acompanhar a certificação ISO 27001, KPIs, KRIs e a evolução das empresas.</p>

      <h1 className="text-2xl font-bold mb-4">Dashboard Geral</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">Empresas</h2>
          <p className="text-3xl">{empresaCount}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">KPIs</h2>
          <p className="text-3xl">{kpiCount}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">KRIs</h2>
          <p className="text-3xl">{kriCount}</p>
        </div>
      </div>
    </Layout>
  );
}
