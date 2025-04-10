// src/components/EmpresaForm.tsx
import { useState } from "react";
import { cadastrarEmpresa } from "@/services/empresaService";

export default function EmpresaForm({ onCadastro }: { onCadastro: () => void }) {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [setor, setSetor] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    try {
      await cadastrarEmpresa({ nome, cnpj, setor });
      setNome("");
      setCnpj("");
      setSetor("");
      onCadastro(); // Atualiza a lista na tela
    } catch (error) {
      alert("Erro ao cadastrar: " + error);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center">Cadastrar Empresa</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        placeholder="CNPJ"
        value={cnpj}
        onChange={(e) => setCnpj(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        placeholder="Setor"
        value={setor}
        onChange={(e) => setSetor(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />
      <button
        type="submit"
        disabled={carregando}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
      >
        {carregando ? "Salvando..." : "Cadastrar"}
      </button>
    </form>
  );
}
