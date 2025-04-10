import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-blue-700 text-white py-4 px-6">
        <h1 className="text-xl font-bold">ISO KPI/KRI Manager</h1>
        <nav className="mt-2 flex gap-4">
          <Link href="/empresas" className="hover:underline">Empresas</Link>
          <Link href="/kpi" className="hover:underline">KPIs</Link>
          <Link href="/kri" className="hover:underline">KRIs</Link>
          <Link href="/evolucao" className="hover:underline">Evolução</Link>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
