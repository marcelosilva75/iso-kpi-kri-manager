import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const menuItems = [
    { name: "Início", path: "/" },
    { name: "Empresas", path: "/empresas" },
    { name: "Avaliações", path: "/avaliacoes" },
    { name: "KPIs", path: "/kpi" },
    { name: "KRIs", path: "/kri" },
    { name: "Indicadores", path: "/indicadores" },
    { name: "Evolução", path: "/evolucao" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">ISO 27001</h1>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded hover:bg-blue-100 ${
                location.pathname === item.path ? "bg-blue-200 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="mb-6 border-b pb-4">
          <h2 className="text-xl font-semibold">Gerenciador ISO 27001</h2>
          <p className="text-sm text-gray-600">
            Acompanhe certificação, KPIs, KRIs e evolução das empresas.
          </p>
        </header>

        {/* Conteúdo da página */}
        <section>{children}</section>
      </main>
    </div>
  );
}
