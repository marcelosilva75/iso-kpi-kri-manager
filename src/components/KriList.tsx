import { useEffect, useState } from "react";
import { listKris } from "@/services/kpiKriService";

export default function KriList() {
  const [kris, setKris] = useState<any[]>([]);

  useEffect(() => {
    const fetchKris = async () => {
      const { data } = await listKris();
      setKris(data || []);
    };
    fetchKris();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">KRIs Cadastrados</h2>
      <ul className="space-y-2">
        {kris.map((kri) => (
          <li key={kri.id} className="p-2 border rounded bg-gray-100">
            <strong>{kri.titulo}</strong><br />
            <span>{kri.descricao}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
