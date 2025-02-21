import { useState, useEffect } from "react";
import { 
  ArrowUpRight, 
  Pickaxe,
  Factory,
  Truck,
  Gauge,
  Hammer,
  HardHat,
  Shovel,
  Drill
} from "lucide-react";
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
  const [shiftView, setShiftView] = useState<"day" | "night" | "both">("both");
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

  const getShiftData = (periodData: any, shift: "day" | "night" | "both") => {
    if (shift === "both") {
      return {
        kpis: {
          totalProgrammed: (parseFloat(periodData.day.kpis.totalProgrammed.replace('K', '')) + 
                          parseFloat(periodData.night.kpis.totalProgrammed.replace('K', ''))).toFixed(1) + 'K',
          efficiencyVol: ((parseFloat(periodData.day.kpis.efficiencyVol.replace('%', '')) + 
                          parseFloat(periodData.night.kpis.efficiencyVol.replace('%', ''))) / 2).toFixed(1) + '%',
          executed: (parseFloat(periodData.day.kpis.executed.replace('K', '')) + 
                    parseFloat(periodData.night.kpis.executed.replace('K', ''))).toFixed(1) + 'K',
          compliance: ((parseFloat(periodData.day.kpis.compliance.replace('%', '')) + 
                      parseFloat(periodData.night.kpis.compliance.replace('%', ''))) / 2).toFixed(1) + '%',
          kgTal: ((parseFloat(periodData.day.kpis.kgTal) + 
                  parseFloat(periodData.night.kpis.kgTal)) / 2).toFixed(1),
          fAdvance: ((parseFloat(periodData.day.kpis.fAdvance.replace('%', '')) + 
                    parseFloat(periodData.night.kpis.fAdvance.replace('%', ''))) / 2).toFixed(1) + '%',
        },
        chartData: periodData.day.chartData.map((item: any, index: number) => ({
          ...item,
          value2: periodData.night.chartData[index].value2
        })),
        barData: shift === "day" ? periodData.day.barData : periodData.night.barData,
        explosivesData: shift === "day" ? periodData.day.explosivesData : periodData.night.explosivesData,
      };
    }
    return periodData[shift];
  };

  useEffect(() => {
    const periodData = timeView === "month" ? dummyData.month : dummyData.week;
    const newData = getShiftData(periodData, shiftView);
    setFilteredData(newData);
    console.log("Filtros actualizados:", { timeView, shiftView, date });
  }, [timeView, shiftView, date]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1120] via-[#0F172A] to-[#1E293B] text-slate-100">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/30 border-b border-slate-700/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="relative flex items-center gap-3">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur"></div>
                <HardHat className="w-8 h-8 text-amber-500" />
                <h1 className="relative text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Operaciones
                </h1>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                <TimeToggle selected={timeView} onChange={setTimeView} />
                <div className="inline-flex p-0.5 bg-slate-800/30 backdrop-blur-xl rounded-lg flex-1">
                  <Button
                    variant="ghost"
                    className={`flex-1 px-4 py-1.5 transition-all duration-300 text-sm font-medium rounded-md ${
                      shiftView === "day"
                        ? "bg-slate-700/50 text-white shadow-lg"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                    onClick={() => setShiftView(shiftView === "day" ? "both" : "day")}
                  >
                    Día
                  </Button>
                  <Button
                    variant="ghost"
                    className={`flex-1 px-4 py-1.5 transition-all duration-300 text-sm font-medium rounded-md ${
                      shiftView === "night"
                        ? "bg-slate-700/50 text-white shadow-lg"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                    onClick={() => setShiftView(shiftView === "night" ? "both" : "night")}
                  >
                    Noche
                  </Button>
                </div>
              </div>
              <DatePickerWithRange 
                date={date} 
                setDate={setDate} 
                className="flex-1 min-w-[200px]"
                viewMode={timeView}
              />
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 space-y-8 animate-fade-in relative z-10">
        <div className="grid gap-6">
          <div className="grid grid-cols-1 gap-6">
            <KPICard
              title="Total Ejecutado / Programado"
              icon={<Gauge className="w-5 h-5 text-purple-400" />}
              value={
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Ejecutado: {filteredData.kpis.executed}</span>
                    <span>Programado: {filteredData.kpis.totalProgrammed}</span>
                  </div>
                  <div className="relative h-3 bg-slate-700/30 rounded-full overflow-hidden backdrop-blur-xl">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-500"
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
              className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 hover:from-purple-500/10 hover:to-pink-500/10 backdrop-blur-xl border-purple-500/10"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <KPICard
              title="Efi. Vol."
              icon={<Factory className="w-5 h-5 text-emerald-400" />}
              value={filteredData.kpis.efficiencyVol}
              className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 hover:from-emerald-500/10 hover:to-teal-500/10 backdrop-blur-xl border-emerald-500/10"
            />
            <KPICard
              title="Cumplimiento"
              icon={<Pickaxe className="w-5 h-5 text-orange-400" />}
              value={filteredData.kpis.compliance}
              className="bg-gradient-to-br from-orange-500/5 to-amber-500/5 hover:from-orange-500/10 hover:to-amber-500/10 backdrop-blur-xl border-orange-500/10"
            />
            <KPICard
              title="Kg/Tal"
              icon={<Truck className="w-5 h-5 text-rose-400" />}
              value={filteredData.kpis.kgTal}
              className="bg-gradient-to-br from-rose-500/5 to-red-500/5 hover:from-rose-500/10 hover:to-red-500/10 backdrop-blur-xl border-rose-500/10"
            />
            <KPICard
              title="F. Avance"
              icon={<Drill className="w-5 h-5 text-violet-400" />}
              value={filteredData.kpis.fAdvance}
              className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 hover:from-violet-500/10 hover:to-purple-500/10 backdrop-blur-xl border-violet-500/10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-slate-800/20 backdrop-blur-xl rounded-xl border border-slate-700/20 overflow-hidden shadow-xl group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Pickaxe className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      Progreso Operaciones
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                </div>
                <OperationsChart
                  data={filteredData.chartData}
                  type="line"
                  title=""
                  shift={shiftView}
                />
              </div>
            </div>
            <div className="bg-slate-800/20 backdrop-blur-xl rounded-xl border border-slate-700/20 overflow-hidden shadow-xl group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Factory className="w-5 h-5 text-orange-400 group-hover:text-orange-300 transition-colors" />
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                      Distribución por Turnos
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                </div>
                <OperationsChart
                  data={filteredData.chartData}
                  type="bar"
                  title=""
                  shift={shiftView}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/20 backdrop-blur-xl rounded-xl border border-slate-700/20 overflow-hidden shadow-xl group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Hammer className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                      Actual Aceros
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                </div>
                <HorizontalBarChart
                  data={filteredData.barData}
                  title=""
                />
              </div>
            </div>
            <div className="bg-slate-800/20 backdrop-blur-xl rounded-xl border border-slate-700/20 overflow-hidden shadow-xl group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Shovel className="w-5 h-5 text-violet-400 group-hover:text-violet-300 transition-colors" />
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400">
                      Actual de Explosivos
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
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
