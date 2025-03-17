
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
  Drill,
  Sun,
  Moon,
  ChevronRight
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
import { 
  operationsData,
  procesarDatosParaGrafico, 
  obtenerKPIs,
  obtenerDatosAceros,
  obtenerDatosExplosivos
} from "@/data/operationsData";

type ShiftView = "day" | "night" | "both";

const Index = () => {
  const [timeView, setTimeView] = useState<"month" | "week">("month");
  const [shiftView, setShiftView] = useState<ShiftView>("both");
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(2024, 0, 1), -30),
    to: new Date(2024, 11, 31),
  });

  const [chartData, setChartData] = useState<any[]>([]);
  const [kpis, setKpis] = useState<any>({});
  const [barData, setBarData] = useState<any[]>([]);
  const [explosivesData, setExplosivesData] = useState<any[]>([]);

  const calculateProgress = (executed: string, programmed: string) => {
    const execValue = parseFloat(executed.replace('K', ''));
    const progValue = parseFloat(programmed.replace('K', ''));
    return (execValue / progValue) * 100;
  };

  useEffect(() => {
    // Si no hay fecha seleccionada, usar el rango completo de datos
    const effectiveDate = date || {
      from: new Date(2024, 0, 1),
      to: new Date(2024, 11, 31),
    };
    
    // Procesar datos para los gráficos según filtros
    const datosOperaciones = procesarDatosParaGrafico(operationsData, timeView, shiftView, effectiveDate);
    setChartData(datosOperaciones);
    
    // Obtener KPIs filtrados
    const kpisCalculados = obtenerKPIs(operationsData, shiftView, effectiveDate);
    setKpis(kpisCalculados);
    
    // Obtener datos de aceros filtrados
    const datosAceros = obtenerDatosAceros(operationsData, timeView, shiftView, effectiveDate);
    setBarData(datosAceros);
    
    // Obtener datos de explosivos filtrados
    const datosExplosivos = obtenerDatosExplosivos(operationsData, timeView, shiftView, effectiveDate);
    setExplosivesData(datosExplosivos);
    
  }, [timeView, shiftView, date]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-slate-50">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none opacity-20" />
      
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/70 border-b border-slate-700/50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="relative flex items-center gap-3">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg blur-lg opacity-75"></div>
                <HardHat className="w-8 h-8 text-amber-500 relative z-10" />
                <h1 className="relative text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 z-10">
                  Operaciones
                </h1>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                <TimeToggle selected={timeView} onChange={setTimeView} />
                <div className="inline-flex p-0.5 bg-slate-800/50 backdrop-blur-xl rounded-lg flex-1 ml-3">
                  <Button
                    variant="ghost"
                    className={`flex-1 px-4 py-1.5 transition-all duration-300 text-sm font-medium rounded-md ${
                      shiftView === "day"
                        ? "bg-slate-700/70 text-white shadow-lg"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                    onClick={() => setShiftView(shiftView === "day" ? "both" : "day")}
                  >
                    <Sun className="w-4 h-4 mr-2" />
                    Día
                  </Button>
                  <Button
                    variant="ghost"
                    className={`flex-1 px-4 py-1.5 transition-all duration-300 text-sm font-medium rounded-md ${
                      shiftView === "night"
                        ? "bg-slate-700/70 text-white shadow-lg"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                    onClick={() => setShiftView(shiftView === "night" ? "both" : "night")}
                  >
                    <Moon className="w-4 h-4 mr-2" />
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
              icon={<Gauge className="w-5 h-5 text-indigo-400" />}
              value={
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-300 font-medium">Ejecutado: {kpis.executed || '0K'}</span>
                    <span className="text-pink-300 font-medium">Programado: {kpis.totalProgrammed || '0K'}</span>
                  </div>
                  <div className="relative h-3 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-xl">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${kpis.executed && kpis.totalProgrammed ? calculateProgress(kpis.executed, kpis.totalProgrammed) : 0}%` 
                      }}
                    />
                  </div>
                  <div className="text-right text-sm">
                    <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                      {kpis.executed && kpis.totalProgrammed ? calculateProgress(kpis.executed, kpis.totalProgrammed).toFixed(1) : 0}%
                    </span>
                  </div>
                </div>
              }
              large
              className="bg-gradient-to-br from-indigo-500/5 to-pink-500/5 hover:from-indigo-500/10 hover:to-pink-500/10 backdrop-blur-xl border-indigo-500/10"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <KPICard
              title="Efi. Vol."
              icon={<Factory className="w-5 h-5 text-emerald-400" />}
              value={kpis.efficiencyVol || '0%'}
              className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 hover:from-emerald-500/10 hover:to-teal-500/10 backdrop-blur-xl border-emerald-500/10"
              trend="up"
              trendValue="3.2%"
            />
            <KPICard
              title="Cumplimiento"
              icon={<Pickaxe className="w-5 h-5 text-amber-400" />}
              value={kpis.compliance || '0%'}
              className="bg-gradient-to-br from-amber-500/5 to-yellow-500/5 hover:from-amber-500/10 hover:to-yellow-500/10 backdrop-blur-xl border-amber-500/10"
              trend="down"
              trendValue="1.5%"
            />
            <KPICard
              title="Kg/Tal"
              icon={<Truck className="w-5 h-5 text-rose-400" />}
              value={kpis.kgTal || '0'}
              className="bg-gradient-to-br from-rose-500/5 to-red-500/5 hover:from-rose-500/10 hover:to-red-500/10 backdrop-blur-xl border-rose-500/10"
              trend="up"
              trendValue="0.8%"
            />
            <KPICard
              title="F. Avance"
              icon={<Drill className="w-5 h-5 text-blue-400" />}
              value={kpis.fAdvance || '0%'}
              className="bg-gradient-to-br from-blue-500/5 to-sky-500/5 hover:from-blue-500/10 hover:to-sky-500/10 backdrop-blur-xl border-blue-500/10"
              trend="up"
              trendValue="2.1%"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-slate-800/30 backdrop-blur-xl rounded-xl border border-slate-700/30 overflow-hidden shadow-xl group hover:shadow-slate-700/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Pickaxe className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      Progreso Operaciones
                    </h3>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                  </Button>
                </div>
                <OperationsChart
                  data={chartData}
                  type="line"
                  title=""
                  shift={shiftView}
                />
              </div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-xl rounded-xl border border-slate-700/30 overflow-hidden shadow-xl group hover:shadow-slate-700/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Factory className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-400">
                      Distribución por Turnos
                    </h3>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                  </Button>
                </div>
                <OperationsChart
                  data={chartData}
                  type="bar"
                  title=""
                  shift={shiftView}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/30 backdrop-blur-xl rounded-xl border border-slate-700/30 overflow-hidden shadow-xl group hover:shadow-slate-700/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Hammer className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                      Actual Aceros {shiftView === "day" ? "(Día)" : shiftView === "night" ? "(Noche)" : ""}
                    </h3>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                  </Button>
                </div>
                <HorizontalBarChart
                  data={barData}
                  title=""
                  color="#10b981"
                />
              </div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-xl rounded-xl border border-slate-700/30 overflow-hidden shadow-xl group hover:shadow-slate-700/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Shovel className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-400">
                      Actual de Explosivos {shiftView === "day" ? "(Día)" : shiftView === "night" ? "(Noche)" : ""}
                    </h3>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                  </Button>
                </div>
                <HorizontalBarChart
                  data={explosivesData}
                  title=""
                  color="#3b82f6"
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
