import { useEffect, useState } from "react";
import { listarEmpresas, Empresa } from "@/services/empresaService";
import EmpresaForm from "@/components/EmpresaForm";
import { Loader, Briefcase } from "lucide-react"; // Ícones

type Ordenacao = "nome" | "cnpj" | "setor";

export default function EmpresasPage() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [toast, setToast] = useState<{ tipo: "erro"; mensagem: string } | null>(null);

  const mostrarToast = (tipo: "erro", mensagem: string) => {
    setToast({ tipo, mensagem });
    setTimeout(() => setToast(null), 4000);
  };

  const carregarEmpresas = async () => {
    setCarregando(true);
    try {
      const data = await listarEmpresas();
      setEmpresas(data);
    } catch (error) {
      mostrarToast("erro", "Erro ao buscar empresas.");
    } finally {
      setCarregando(false);
    }
  };

  const handleExcluir = async (empresaId: string) => {
    if (window.confirm("Tem certeza que deseja excluir esta empresa?")) {
      try {
        await excluirEmpresa(empresaId); // Função de exclusão
        carregarEmpresas(); // Atualiza a lista
      } catch (error) {
        alert("Erro ao excluir empresa: " + error);
      }
    }
  };

  useEffect(() => {
    carregarEmpresas();
  }, []);

  return (
    <div className="p-6 space-y-10 max-w-5xl mx-auto">
      {toast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded shadow-md z-50">
          {toast.mensagem}
        </div>
      )}

      <EmpresaForm onCadastro={carregarEmpresas} />

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Empresas Cadastradas</h2>

        {carregando ? (
          <div className="flex justify-center py-10">
            <Loader className="h-8 w-8 text-blue-500 animate-spin" />
          </div>
        ) : empresas.length === 0 ? (
          <p className="text-center text-gray-600">Nenhuma empresa cadastrada ainda.</p>
        ) : (
          <TabelaEmpresas empresas={empresas} onExcluir={handleExcluir} />
        )}
      </div>
    </div>
  );
}
