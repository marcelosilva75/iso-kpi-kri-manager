import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Layout from "@/components/Layout";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function ControlesISO() {
  const [controles, setControles] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function fetchControles() {
      const { data, error } = await supabase
        .from("iso_controles")
        .select("*, iso_subcontroles(*)");

      if (!error && data) {
        setControles(data);

        const categoriaCount: Record<string, number> = {};
        data.forEach((c) => {
          categoriaCount[c.categoria] = (categoriaCount[c.categoria] || 0) + 1;
        });

        const categoriasArray = Object.entries(categoriaCount).map(
          ([name, value]) => ({ name, value })
        );

        setCategorias(categoriasArray);
      }
    }

    fetchControles();
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#845EC2"];

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">📘 Controles ISO 27001</h2>

      <div className="mb-10 bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Distribuição por Categoria</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categorias}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name }) => name}
              outerRadius={100}
              dataKey="value"
            >
              {categorias.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-6">
        {controles.map((controle: any) => (
          <div key={controle.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              {controle.codigo} - {controle.titulo}
            </h3>
            <p className="text-gray-700 mb-2">{controle.descricao}</p>
            <p className="text-sm text-gray-500 mb-2">
              Categoria: {controle.categoria}
            </p>

            {controle.iso_subcontroles && controle.iso_subcontroles.length > 0 && (
              <div className="pl-4 border-l-4 border-blue-400 mt-2">
                <h4 className="font-semibold text-blue-600 mb-1">Subcontroles:</h4>
                <ul className="list-disc ml-4">
                  {controle.iso_subcontroles.map((sub: any) => (
                    <li key={sub.id} className="text-gray-700">
                      <strong>{sub.titulo}</strong>: {sub.descricao}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}
