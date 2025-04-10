// src/pages/empresas.tsx
import { useEffect, useState } from "react";
import { listarEmpresas, Empresa } from "@/services/empresaService";
import EmpresaForm from "@/components/EmpresaForm";

export default function EmpresasPage() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [carregando, setCarregando] = useState(true);

  const carregarEmpresas = async () => {
    setCarregando(true);
    try {
      const data = await listarEmpresas();
      setEmpresas(data);
    } catch (error) {
      alert("Erro ao buscar empresas: " + error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarEmpresas();
  }, []);

  return (
    <div className="p-4 space-y-8">
      <EmpresaForm onCadastro={carregarEmpresas} />
      <div className="bg-white p-4 rounded-xl shadow-md max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Empresas Cadastradas</h2>
        {carregando ? (
          <p>Carregando...</p>
        ) : (
          <ul className="space-y-2">
            {empresas.map((empresa) => (
              <li key={empresa.id} className="border-b pb-2">
                <strong>{empresa.nome}</strong> – {empresa.setor || "Setor não informado"}<br />
                <span className="text-sm text-gray-500">{empresa.cnpj || "CNPJ não informado"}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
