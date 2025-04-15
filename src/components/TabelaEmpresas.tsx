import { Empresa } from "@/services/empresaService";
import { useState, useMemo } from "react";

type Ordenacao = "nome" | "cnpj" | "setor";

export default function TabelaEmpresas({
  empresas,
  onExcluir,
}: {
  empresas: Empresa[];
  onExcluir: (empresaId: string) => void;
}) {
  const [ordem, setOrdem] = useState<Ordenacao>("nome");
  const [ordemAscendente, setOrdemAscendente] = useState(true);

  const empresasOrdenadas = useMemo(() => {
    return empresas.sort((a, b) => {
      if (a[ordem] < b[ordem]) return ordemAscendente ? -1 : 1;
      if (a[ordem] > b[ordem]) return ordemAscendente ? 1 : -1;
      return 0;
    });
  }, [empresas, ordem, ordemAscendente]);

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-200">
          <tr>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => {
                setOrdem("nome");
                setOrdemAscendente(!ordemAscendente);
              }}
            >
              Nome
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => {
                setOrdem("cnpj");
                setOrdemAscendente(!ordemAscendente);
              }}
            >
              CNPJ
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => {
                setOrdem("setor");
                setOrdemAscendente(!ordemAscendente);
              }}
            >
              Setor
            </th>
            <th className="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {empresasOrdenadas.map((empresa) => (
            <tr key={empresa.id} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2">{empresa.nome}</td>
              <td className="px-4 py-2">{empresa.cnpj}</td>
              <td className="px-4 py-2">{empresa.setor || "Setor não informado"}</td>
              <td className="px-4 py-2 space-x-2">
                <button className="text-yellow-500 hover:text-yellow-600">Editar</button>
                <button
                  onClick={() => onExcluir(empresa.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
