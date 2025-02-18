
import { useState, useEffect } from "react";
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
  month: {
    kpis: {
      totalProgrammed: "85.3K",
      efficiencyVol: "92.8%",
      executed: "78.2K",
      compliance: "91.7%",
      kgTal: "156.4",
      fAdvance: "94.3%",
    },
    chartData: [
      { name: "Ene", value1: 400, value2: 300 },
      { name: "Feb", value1: 300, value2: 400 },
      { name: "Mar", value1: 500, value2: 200 },
      { name: "Abr", value1: 600, value2: 500 },
      { name: "May", value1: 400, value2: 300 },
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
  },
  week: {
    kpis: {
      totalProgrammed: "22.1K",
      efficiencyVol: "94.2%",
      executed: "20.5K",
      compliance: "93.1%",
      kgTal: "142.8",
      fAdvance: "95.7%",
    },
    chartData: [
      { name: "Lun", value1: 120, value2: 90 },
      { name: "Mar", value1: 150, value2: 130 },
      { name: "Mie", value1: 180, value2: 160 },
      { name: "Jue", value1: 140, value2: 120 },
      { name: "Vie", value1: 160, value2: 140 },
    ],
    barData: [
      { name: "Brocas de 38", value: 75 },
      { name: "Barra Conica 8", value: 0 },
      { name: "Barra Conica 6", value: 4 },
      { name: "Barra Conica 5", value: 2 },
      { name: "Barra Conica 4", value: 8 },
      { name: "Barra Conica 3", value: 1 },
    ],
    explosivesData: [
      { name: "Mecha Rapida", value: 800 },
      { name: "Fanel Largo 4.8M", value: 15 },
      { name: "E5000 1 X 12", value: 3500 },
      { name: "E3000 1 1/4 X 12", value: 80 },
      { name: "E3000 1 X 12", value: 5200 },
      { name: "E1000 1 1/4 X 12", value: 250 },
      { name: "Cordon Detonante", value: 70 },
      { name: "Carmex 2 x 8", value: 800 },
      { name: "Carmex 1 x 8", value: 1200 },
    ],
  },
};

const Index = () => {
  const [timeView, setTimeView] = useState<"month" | "week">("month");
  const currentDate = new Date();
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  });

  // Estado para almacenar los datos filtrados
  const [filteredData, setFilteredData] = useState(dummyData.month);

  // Efecto para filtrar los datos cuando cambien los filtros
  useEffect(() => {
    // Cambiamos los datos según la vista seleccionada
    const newData = timeView === "month" ? dummyData.month : dummyData.week;
    setFilteredData(newData);
    
    console.log("Filtros actualizados:", { timeView, date });
  }, [timeView, date]);

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
            data={filteredData.chartData}
            type="line"
            title="Progreso Operaciones"
          />
          <OperationsChart
            data={filteredData.chartData}
            type="bar"
            title="Distribución por Turnos"
          />
        </div>

        {/* KPIs */}
        <div className="grid gap-6 mb-8">
          {/* First row - larger KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <KPICard
              title="Total Programado"
              value={filteredData.kpis.totalProgrammed}
              large
            />
            <KPICard
              title="Efi. Vol."
              value={filteredData.kpis.efficiencyVol}
              large
            />
          </div>
          {/* Second row - smaller KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <KPICard title="Ejecutado" value={filteredData.kpis.executed} />
            <KPICard title="Cumplimiento" value={filteredData.kpis.compliance} />
            <KPICard title="Kg/Tal" value={filteredData.kpis.kgTal} />
            <KPICard title="F. Avance" value={filteredData.kpis.fAdvance} />
          </div>
        </div>

        {/* Horizontal Bar Charts */}
        <div className="space-y-6">
          <HorizontalBarChart
            data={filteredData.barData}
            title="Actual Aceros"
          />
          <HorizontalBarChart
            data={filteredData.explosivesData}
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
