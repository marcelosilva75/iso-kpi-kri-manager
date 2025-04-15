// src/components/Layout.tsx
import { Link } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">Gerenciador ISO 27001</h1>
      </header>
      <nav>
        <ul className="flex space-x-4 bg-blue-700 text-white p-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/avaliacoes" className="hover:text-gray-300">
              Avaliações
            </Link>
          </li>
          <li>
            <Link to="/controles-iso" className="hover:text-gray-300">
              Controles ISO
            </Link> {/* Novo item no menu */}
          </li>
          {/* Outros itens do menu podem ser adicionados aqui */}
        </ul>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;

