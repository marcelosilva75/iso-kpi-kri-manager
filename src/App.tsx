import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Importando as páginas
import HomePage from "./pages/HomePage";
import Empresas from "./pages/empresas";
import Avaliacoes from "./pages/avaliacoes";
import Evolucao from "./pages/evolucao";
import Indicadores from "./pages/indicadores";
import KPI from "./pages/kpi";
import KRI from "./pages/kri";
import TestePage from "./pages/testepage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-blue-900 text-white py-4 px-6 shadow-md">
          <h1 className="text-2xl font-bold">Gerenciador ISO 27001</h1>
        </header>

        {/* Menu */}
        <nav className="bg-blue-100 py-3 px-6 flex gap-6 text-blue-900 font-medium">
          <Link to="/" className="hover:underline">Início</Link>
          <Link to="/empresas" className="hover:underline">Empresas</Link>
          <Link to="/avaliacoes" className="hover:underline">Avaliações</Link>
          <Link to="/evolucao" className="hover:underline">Evolução</Link>
          <Link to="/indicadores" className="hover:underline">Indicadores</Link>
          <Link to="/kpi" className="hover:underline">KPIs</Link>
          <Link to="/kri" className="hover:underline">KRIs</Link>
          <Link to="/testepage" className="hover:underline">Teste</Link>
        </nav>

        {/* Rotas */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/avaliacoes" element={<Avaliacoes />} />
            <Route path="/evolucao" element={<Evolucao />} />
            <Route path="/indicadores" element={<Indicadores />} />
            <Route path="/kpi" element={<KPI />} />
            <Route path="/kri" element={<KRI />} />
            <Route path="/testepage" element={<TestePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
