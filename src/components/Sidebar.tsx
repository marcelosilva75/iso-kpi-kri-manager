import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/empresas" className="hover:underline">
          Empresas
        </Link>
        <Link href="/kpi" className="hover:underline">
          KPIs
        </Link>
        <Link href="/kri" className="hover:underline">
          KRIs
        </Link>
        <Link href="/avaliacoes" className="hover:underline">
          Avaliações
        </Link>
      </nav>
    </aside>
  );
}
