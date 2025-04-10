import KpiForm from "@/components/KpiForm";
import KpiList from "@/components/KpiList";
import KriForm from "@/components/KriForm";
import KriList from "@/components/KriList";

export default function IndicadoresPage() {
  return (
    <div className="grid md:grid-cols-2 gap-4 p-6">
      <div>
        <KpiForm />
        <KpiList />
      </div>
      <div>
        <KriForm />
        <KriList />
      </div>
    </div>
  );
}
