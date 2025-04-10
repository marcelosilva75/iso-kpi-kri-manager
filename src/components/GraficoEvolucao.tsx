import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface EvolucaoData {
  data: string;
  valor: number;
}

interface Props {
  dados: EvolucaoData[];
  titulo?: string;
}

export default function GraficoEvolucao({ dados, titulo = "Evolução" }: Props) {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h3 className="text-lg font-semibold mb-2">{titulo}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="valor" stroke="#8884d8" name="Valor" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
