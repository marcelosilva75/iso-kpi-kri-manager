import { useEffect, useState } from "react";
import { listKpis } from "@/services/kpiKriService";

export default function KpiList() {
  const [kpis, setKpis] = useState<any[]>([]);

  useEffect(() => {
    const fetchKpis = async () => {
      const { data } = await listKpis();
      setKpis(data || []);
    };
    fetchKpis();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">KPIs Cadastrados</h2>
      <ul className="space-y-2">
        {kpis.map((kpi) => (
          <li key={kpi.id} className="p-2 border rounded bg-gray-100">
            <strong>{kpi.titulo}</strong><br />
            <span>{kpi.descricao}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
