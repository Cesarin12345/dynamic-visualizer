
import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import KPICard from "@/components/KPICard";
import TimeToggle from "@/components/TimeToggle";
import OperationsChart from "@/components/OperationsChart";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import MobileMenu from "@/components/MobileMenu";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

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
  barData: [
    { name: "Brocas de 38", value: 215 },
    { name: "Barra Conica 8", value: 1 },
    { name: "Barra Conica 6", value: 12 },
    { name: "Barra Conica 5", value: 6 },
    { name: "Barra Conica 4", value: 31 },
    { name: "Barra Conica 3", value: 3 },
  ],
  explosivesData: [
    { name: "Mecha Rapida", value: 3000 },
    { name: "Fanel Largo 4.8M", value: 60 },
    { name: "E5000 1 X 12", value: 14349 },
    { name: "E3000 1 1/4 X 12", value: 260 },
    { name: "E3000 1 X 12", value: 20136 },
    { name: "E1000 1 1/4 X 12", value: 1080 },
    { name: "Cordon Detonante", value: 270 },
    { name: "Carmex 2 x 8", value: 3062 },
    { name: "Carmex 1 x 8", value: 5279 },
  ],
};

const Index = () => {
  const [timeView, setTimeView] = useState<"month" | "week">("month");
  const currentDate = new Date();
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100 pb-20">
      <div className="container mx-auto px-4 py-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-8 space-y-4">
          <h1 className="text-3xl font-bold">Operaciones</h1>
          <div className="flex items-center text-slate-400 space-x-2">
            <CalendarIcon className="w-4 h-4" />
            <span className="text-sm">
              {format(currentDate, "dd 'de' MMMM yyyy, HH:mm:ss", {
                locale: es,
              })}
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <TimeToggle selected={timeView} onChange={setTimeView} />
          <DatePickerWithRange date={date} setDate={setDate} />
        </div>

        {/* Progress Charts */}
        <div className="space-y-6 mb-8">
          <OperationsChart
            data={dummyData.chartData}
            type="line"
            title="Progreso Operaciones"
          />
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

        {/* Horizontal Bar Charts */}
        <div className="space-y-6">
          <HorizontalBarChart
            data={dummyData.barData}
            title="Actual Aceros"
          />
          <HorizontalBarChart
            data={dummyData.explosivesData}
            title="Actual de Explosivos"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </div>
  );
};

export default Index;
