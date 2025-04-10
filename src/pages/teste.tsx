import React, { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient"; // ajuste o caminho conforme seu projeto

export default function TestePage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("empresa").select("*");
      if (error) console.error("Erro:", error);
      else setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Teste de conexão</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
