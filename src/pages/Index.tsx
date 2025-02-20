import { useState, useEffect } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon, ArrowUpRight } from "lucide-react";
import KPICard from "@/components/KPICard";
import TimeToggle from "@/components/TimeToggle";
import OperationsChart from "@/components/OperationsChart";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import MobileMenu from "@/components/MobileMenu";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { Button } from "@/components/ui/button";

const dummyData = {
  month: {
    day: {
      kpis: {
        totalProgrammed: "45.1K",
        efficiencyVol: "94.2%",
        executed: "42.3K",
        compliance: "93.8%",
        kgTal: "148.2",
        fAdvance: "95.1%",
      },
      chartData: [
        { name: "Ene", value1: 200, value2: 150 },
        { name: "Feb", value1: 180, value2: 170 },
        { name: "Mar", value1: 250, value2: 220 },
        { name: "Abr", value1: 300, value2: 280 },
        { name: "May", value1: 280, value2: 260 },
        { name: "Jun", value1: 320, value2: 300 },
        { name: "Jul", value1: 290, value2: 270 },
        { name: "Ago", value1: 310, value2: 290 },
        { name: "Sep", value1: 340, value2: 320 },
        { name: "Oct", value1: 290, value2: 270 },
        { name: "Nov", value1: 270, value2: 250 },
        { name: "Dic", value1: 250, value2: 230 },
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
    night: {
      kpis: {
        totalProgrammed: "40.2K",
        efficiencyVol: "91.6%",
        executed: "35.9K",
        compliance: "89.5%",
        kgTal: "144.2",
        fAdvance: "93.2%",
      },
      chartData: [
        { name: "Ene", value1: 180, value2: 150 },
        { name: "Feb", value1: 160, value2: 140 },
        { name: "Mar", value1: 250, value2: 200 },
        { name: "Abr", value1: 280, value2: 220 },
        { name: "May", value1: 260, value2: 240 },
        { name: "Jun", value1: 300, value2: 270 },
        { name: "Jul", value1: 270, value2: 250 },
        { name: "Ago", value1: 290, value2: 270 },
        { name: "Sep", value1: 320, value2: 300 },
        { name: "Oct", value1: 270, value2: 250 },
        { name: "Nov", value1: 250, value2: 230 },
        { name: "Dic", value1: 230, value2: 210 },
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
    }
  },
  week: {
    day: {
      kpis: {
        totalProgrammed: "12.1K",
        efficiencyVol: "95.2%",
        executed: "11.5K",
        compliance: "94.1%",
        kgTal: "146.8",
        fAdvance: "96.7%",
      },
      chartData: [
        { name: "S1", value1: 120, value2: 110 },
        { name: "S2", value1: 150, value2: 140 },
        { name: "S3", value1: 180, value2: 170 },
        { name: "S4", value1: 160, value2: 150 },
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
    night: {
      kpis: {
        totalProgrammed: "10.0K",
        efficiencyVol: "93.2%",
        executed: "9.0K",
        compliance: "92.1%",
        kgTal: "138.0",
        fAdvance: "94.0%",
      },
      chartData: [
        { name: "S1", value1: 100, value2: 90 },
        { name: "S2", value1: 130, value2: 120 },
        { name: "S3", value1: 160, value2: 150 },
        { name: "S4", value1: 140, value2: 130 },
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
    }
  }
};

const Index = () => {
  const [timeView, setTimeView] = useState<"month" | "week">("month");
  const [shiftView, setShiftView] = useState<"day" | "night">("day");
  const currentDate = new Date();
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  });

  const [filteredData, setFilteredData] = useState(dummyData.month.day);

  const calculateProgress = (executed: string, programmed: string) => {
    const execValue = parseFloat(executed.replace('K', ''));
    const progValue = parseFloat(programmed.replace('K', ''));
    return (execValue / progValue) * 100;
  };

  useEffect(() => {
    const periodData = timeView === "month" ? dummyData.month : dummyData.week;
    const newData = shiftView === "day" ? periodData.day : periodData.night;
    setFilteredData(newData);
    console.log("Filtros actualizados:", { timeView, shiftView, date });
  }, [timeView, shiftView, date]);

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100">
      <div className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <h1 className="relative text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Operaciones
                </h1>
              </div>
              <div className="flex items-center text-slate-400 space-x-2 bg-slate-800/50 px-3 py-1 rounded-full">
                <CalendarIcon className="w-4 h-4" />
                <span className="text-sm">
                  {format(currentDate, "dd 'de' MMMM yyyy, HH:mm:ss", {
                    locale: es,
                  })}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                <TimeToggle selected={timeView} onChange={setTimeView} />
                <div className="inline-flex p-0.5 bg-slate-800/50 backdrop-blur-sm rounded-lg flex-1">
                  <Button
                    variant="ghost"
                    className={`flex-1 px-4 py-1.5 transition-all duration-300 text-sm ${
                      shiftView === "day"
                        ? "bg-slate-700/70 text-slate-100"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                    onClick={() => setShiftView("day")}
                  >
                    Día
                  </Button>
                  <Button
                    variant="ghost"
                    className={`flex-1 px-4 py-1.5 transition-all duration-300 text-sm ${
                      shiftView === "night"
                        ? "bg-slate-700/70 text-slate-100"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                    onClick={() => setShiftView("night")}
                  >
                    Noche
                  </Button>
                </div>
              </div>
              <DatePickerWithRange date={date} setDate={setDate} className="flex-1 min-w-[200px]" />
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 space-y-8 animate-fade-in">
        <div className="grid gap-6">
          <div className="grid grid-cols-1 gap-6">
            <KPICard
              title="Total Ejecutado / Programado"
              value={
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Ejecutado: {filteredData.kpis.executed}</span>
                    <span>Programado: {filteredData.kpis.totalProgrammed}</span>
                  </div>
                  <div className="relative h-4 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${calculateProgress(filteredData.kpis.executed, filteredData.kpis.totalProgrammed)}%` 
                      }}
                    />
                  </div>
                  <div className="text-right text-sm text-slate-400">
                    {calculateProgress(filteredData.kpis.executed, filteredData.kpis.totalProgrammed).toFixed(1)}%
                  </div>
                </div>
              }
              large
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <KPICard
              title="Efi. Vol."
              value={filteredData.kpis.efficiencyVol}
              className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20"
            />
            <KPICard
              title="Cumplimiento"
              value={filteredData.kpis.compliance}
              className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 hover:from-orange-500/20 hover:to-amber-500/20"
            />
            <KPICard
              title="Kg/Tal"
              value={filteredData.kpis.kgTal}
              className="bg-gradient-to-br from-rose-500/10 to-red-500/10 hover:from-rose-500/20 hover:to-red-500/20"
            />
            <KPICard
              title="F. Avance"
              value={filteredData.kpis.fAdvance}
              className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 hover:from-violet-500/20 hover:to-purple-500/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-100">Progreso Operaciones</h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </div>
                <OperationsChart
                  data={filteredData.chartData}
                  type="line"
                  title=""
                />
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-100">Distribución por Turnos</h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </div>
                <OperationsChart
                  data={filteredData.chartData}
                  type="bar"
                  title=""
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-100">Actual Aceros</h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </div>
                <HorizontalBarChart
                  data={filteredData.barData}
                  title=""
                />
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-100">Actual de Explosivos</h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </div>
                <HorizontalBarChart
                  data={filteredData.explosivesData}
                  title=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <MobileMenu />
    </div>
  );
};

export default Index;
