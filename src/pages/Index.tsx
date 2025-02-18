
import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar } from "lucide-react";
import KPICard from "@/components/KPICard";
import TimeToggle from "@/components/TimeToggle";
import OperationsChart from "@/components/OperationsChart";

// Dummy data - replace with real data
const dummyData = {
  kpis: {
    totalProgrammed: "85.3K",
    efficiencyVol: "92.8%",
    executed: "78.2K",
    compliance: "91.7%",
    kgTal: "156.4",
    fAdvance: "94.3%",
  },
  chartData: [
    { name: "1", value1: 400, value2: 300 },
    { name: "2", value1: 300, value2: 400 },
    { name: "3", value1: 500, value2: 200 },
    { name: "4", value1: 600, value2: 500 },
    { name: "5", value1: 400, value2: 300 },
  ],
};

const Index = () => {
  const [timeView, setTimeView] = useState<"month" | "week">("month");
  const currentDate = new Date();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
      <div className="container mx-auto px-4 py-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-8 space-y-4">
          <h1 className="text-3xl font-bold">Operaciones</h1>
          <div className="flex items-center text-slate-400 space-x-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">
              {format(currentDate, "dd 'de' MMMM yyyy, HH:mm:ss", {
                locale: es,
              })}
            </span>
          </div>
        </div>

        {/* Time Toggle */}
        <div className="flex justify-center mb-8">
          <TimeToggle selected={timeView} onChange={setTimeView} />
        </div>

        {/* KPIs */}
        <div className="grid gap-6 mb-8">
          {/* First row - larger KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <KPICard
              title="Total Programado"
              value={dummyData.kpis.totalProgrammed}
              large
            />
            <KPICard
              title="Efi. Vol."
              value={dummyData.kpis.efficiencyVol}
              large
            />
          </div>
          {/* Second row - smaller KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <KPICard title="Ejecutado" value={dummyData.kpis.executed} />
            <KPICard title="Cumplimiento" value={dummyData.kpis.compliance} />
            <KPICard title="Kg/Tal" value={dummyData.kpis.kgTal} />
            <KPICard title="F. Avance" value={dummyData.kpis.fAdvance} />
          </div>
        </div>

        {/* Charts */}
        <div className="space-y-6">
          <OperationsChart
            data={dummyData.chartData}
            type="line"
            title="Evolución de Métricas"
          />
          <OperationsChart
            data={dummyData.chartData}
            type="bar"
            title="Distribución por Turnos"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
