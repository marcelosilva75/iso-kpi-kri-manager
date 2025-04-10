// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link href="/" className="text-xl font-bold">
          ISO Manager
        </Link>
        <div className="space-x-4">
          <Link href="/evolucao" className="hover:underline">
            Evolução
          </Link>
          <Link href="/kpi" className="hover:underline">
            KPI
          </Link>
          <Link href="/kri" className="hover:underline">
            KRI
          </Link>
          <Link href="/empresa" className="hover:underline">
            Empresas
          </Link>
        </div>
      </div>
    </nav>
  );
}
