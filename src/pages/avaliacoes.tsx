import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Layout from "@/components/Layout";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

export default function AvaliacoesPage() {
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    const fetchAvaliacoes = async () => {
      const { data, error } = await supabase
        .from("avaliacao_certificacao")
        .select("*, empresa(nome)");

      if (error) console.error("Erro ao buscar avaliações:", error);
      else setAvaliacoes(data);
    };

    fetchAvaliacoes();
  }, []);

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Avaliações de Certificação</h2>
      <p className="mb-4">Avaliações e progresso das empresas rumo à certificação ISO 27001.</p>

      {/* Gráfico de conformidade */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-xl font-semibold mb-2">Conformidade por Empresa</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={avaliacoes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="empresa.nome" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="percentual_conformidade" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Tabela de avaliações */}
      <div className="overflow-x-auto bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Lista de Avaliações</h3>
        <table className="table-auto w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="px-2 py-1">Empresa</th>
              <th className="px-2 py-1">Status</th>
              <th className="px-2 py-1">Início</th>
              <th className="px-2 py-1">Fim</th>
              <th className="px-2 py-1">Conformidade (%)</th>
              <th className="px-2 py-1">Comentário</th>
            </tr>
          </thead>
          <tbody>
            {avaliacoes.map((av) => (
              <tr key={av.id} className="border-b">
                <td className="px-2 py-1">{av.empresa?.nome}</td>
                <td className="px-2 py-1">{av.status}</td>
                <td className="px-2 py-1">{av.data_inicio}</td>
                <td className="px-2 py-1">{av.data_fim}</td>
                <td className="px-2 py-1">{av.percentual_conformidade}%</td>
                <td className="px-2 py-1">{av.comentario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
