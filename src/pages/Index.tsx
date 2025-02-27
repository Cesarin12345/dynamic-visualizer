
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
  Moon
} from "lucide-react";
import KPICard from "@/components/KPICard";
import TimeToggle from "@/components/TimeToggle";
import OperationsChart from "@/components/OperationsChart";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import MobileMenu from "@/components/MobileMenu";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { operationsData, procesarDatosParaGrafico, obtenerKPIs } from "@/data/operationsData";
import { useToast } from "@/hooks/use-toast";

// Datos detallados para aceros por turno
const acerosPorTurno = {
  day: [
    { name: "Brocas de 38mm", value: 215 },
    { name: "Barra Conica 8'", value: 124 },
    { name: "Barra Conica 6'", value: 192 },
    { name: "Barra Conica 5'", value: 86 },
    { name: "Barra Conica 4'", value: 131 },
    { name: "Barra Conica 3'", value: 73 },
  ],
  night: [
    { name: "Brocas de 38mm", value: 185 },
    { name: "Barra Conica 8'", value: 102 },
    { name: "Barra Conica 6'", value: 150 },
    { name: "Barra Conica 5'", value: 94 },
    { name: "Barra Conica 4'", value: 125 },
    { name: "Barra Conica 3'", value: 65 },
  ]
};

// Datos detallados para explosivos por turno, basados en la imagen
const explosivosPorTurno = {
  day: [
    { name: "Mecha Rapida", value: 3200 },
    { name: "Fanel Largo 4.8M", value: 2800 },
    { name: "E5000 1 X 12", value: 14349 },
    { name: "E3000 1 1/4 X 12", value: 2260 },
    { name: "E3000 1 X 12", value: 20136 },
    { name: "E1000 1 1/4 X 12", value: 3080 },
    { name: "Cordon Detonante", value: 2270 },
    { name: "Carmex 2 x 8", value: 3062 },
    { name: "Carmex 1 x 8", value: 5279 },
  ],
  night: [
    { name: "Mecha Rapida", value: 2500 },
    { name: "Fanel Largo 4.8M", value: 2150 },
    { name: "E5000 1 X 12", value: 12000 },
    { name: "E3000 1 1/4 X 12", value: 1820 },
    { name: "E3000 1 X 12", value: 18000 },
    { name: "E1000 1 1/4 X 12", value: 2950 },
    { name: "Cordon Detonante", value: 1920 },
    { name: "Carmex 2 x 8", value: 2800 },
    { name: "Carmex 1 x 8", value: 4500 },
  ]
};

type ShiftView = "day" | "night" | "both";

const Index = () => {
  const { toast } = useToast();
  const [timeView, setTimeView] = useState<"month" | "week">("month");
  const [shiftView, setShiftView] = useState<ShiftView>("both");
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date("2024-01-01"),
    to: new Date("2024-12-31"),
  });

  const [chartData, setChartData] = useState<any[]>([]);
  const [kpis, setKpis] = useState<any>({});
  const [barData, setBarData] = useState(acerosPorTurno.day);
  const [explosivesData, setExplosivesData] = useState(explosivosPorTurno.day);

  const calculateProgress = (executed: string, programmed: string) => {
    const execValue = parseFloat(executed.replace('K', ''));
    const progValue = parseFloat(programmed.replace('K', ''));
    return (execValue / progValue) * 100;
  };

  const handleTimeViewChange = (view: "month" | "week") => {
    setTimeView(view);
    toast({
      title: `Vista cambiada a ${view === "month" ? "meses" : "semanas"}`,
      description: `Mostrando datos por ${view === "month" ? "meses" : "semanas"}`,
    });
  };

  const handleShiftViewChange = (shift: ShiftView) => {
    const newShift = shiftView === shift ? "both" : shift;
    setShiftView(newShift);
    toast({
      title: `Vista de turno actualizada`,
      description: newShift === "both" 
        ? "Mostrando ambos turnos" 
        : `Mostrando solo turno de ${newShift === "day" ? "día" : "noche"}`,
    });
  };

  useEffect(() => {
    // Procesar datos basados en los filtros actuales
    const datosGrafico = procesarDatosParaGrafico(operationsData, timeView, shiftView, date);
    setChartData(datosGrafico);
    
    // Obtener KPIs filtrados
    const kpisCalculados = obtenerKPIs(operationsData, shiftView, date);
    setKpis(kpisCalculados);
    
    // Actualizar datos de herramientas basado en turno seleccionado
    if (shiftView === "both") {
      // Para "both", mostramos los datos del día por defecto
      setBarData(acerosPorTurno.day);
      setExplosivesData(explosivosPorTurno.day);
    } else {
      setBarData(acerosPorTurno[shiftView]);
      setExplosivesData(explosivosPorTurno[shiftView]);
    }
    
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
                <TimeToggle selected={timeView} onChange={handleTimeViewChange} />
                <div className="inline-flex p-0.5 bg-slate-800/30 backdrop-blur-xl rounded-lg flex-1 ml-3">
                  <Button
                    variant="ghost"
                    className={`flex-1 px-4 py-1.5 transition-all duration-300 text-sm font-medium rounded-md ${
                      shiftView === "day"
                        ? "bg-slate-700/50 text-white shadow-lg"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                    onClick={() => handleShiftViewChange("day")}
                  >
                    <Sun className="w-4 h-4 mr-2" />
                    Día
                  </Button>
                  <Button
                    variant="ghost"
                    className={`flex-1 px-4 py-1.5 transition-all duration-300 text-sm font-medium rounded-md ${
                      shiftView === "night"
                        ? "bg-slate-700/50 text-white shadow-lg"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                    onClick={() => handleShiftViewChange("night")}
                  >
                    <Moon className="w-4 h-4 mr-2" />
                    Noche
                  </Button>
                </div>
              </div>
              <DatePickerWithRange 
                date={date} 
                setDate={(newDate) => {
                  setDate(newDate);
                  if (newDate && newDate.from) {
                    toast({
                      title: "Rango de fechas actualizado",
                      description: `Desde ${newDate.from.toLocaleDateString()} hasta ${newDate.to ? newDate.to.toLocaleDateString() : 'actual'}`,
                    });
                  }
                }} 
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
                    <span>Ejecutado: {kpis.executed || '0K'}</span>
                    <span>Programado: {kpis.totalProgrammed || '0K'}</span>
                  </div>
                  <div className="relative h-3 bg-slate-700/30 rounded-full overflow-hidden backdrop-blur-xl">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${kpis.executed && kpis.totalProgrammed ? calculateProgress(kpis.executed, kpis.totalProgrammed) : 0}%` 
                      }}
                    />
                  </div>
                  <div className="text-right text-sm text-slate-400">
                    {kpis.executed && kpis.totalProgrammed ? calculateProgress(kpis.executed, kpis.totalProgrammed).toFixed(1) : 0}%
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
              value={kpis.efficiencyVol || '0%'}
              className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 hover:from-emerald-500/10 hover:to-teal-500/10 backdrop-blur-xl border-emerald-500/10"
            />
            <KPICard
              title="Cumplimiento"
              icon={<Pickaxe className="w-5 h-5 text-orange-400" />}
              value={kpis.compliance || '0%'}
              className="bg-gradient-to-br from-orange-500/5 to-amber-500/5 hover:from-orange-500/10 hover:to-amber-500/10 backdrop-blur-xl border-orange-500/10"
            />
            <KPICard
              title="Kg/Tal"
              icon={<Truck className="w-5 h-5 text-rose-400" />}
              value={kpis.kgTal || '0'}
              className="bg-gradient-to-br from-rose-500/5 to-red-500/5 hover:from-rose-500/10 hover:to-red-500/10 backdrop-blur-xl border-rose-500/10"
            />
            <KPICard
              title="F. Avance"
              icon={<Drill className="w-5 h-5 text-violet-400" />}
              value={kpis.fAdvance || '0%'}
              className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 hover:from-violet-500/10 hover:to-purple-500/10 backdrop-blur-xl border-violet-500/10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-slate-800/20 backdrop-blur-xl rounded-xl border border-slate-700/20 overflow-hidden shadow-xl group">
              <div className="p-4 sm:p-6">
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
                  data={chartData}
                  type="line"
                  title=""
                  shift={shiftView}
                />
              </div>
            </div>
            <div className="bg-slate-800/20 backdrop-blur-xl rounded-xl border border-slate-700/20 overflow-hidden shadow-xl group">
              <div className="p-4 sm:p-6">
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
                  data={chartData}
                  type="bar"
                  title=""
                  shift={shiftView}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/20 backdrop-blur-xl rounded-xl border border-slate-700/20 overflow-hidden shadow-xl group">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Hammer className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                      Actual Aceros {shiftView === "day" ? "(Día)" : shiftView === "night" ? "(Noche)" : ""}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                </div>
                <HorizontalBarChart
                  data={barData}
                  title=""
                />
              </div>
            </div>
            <div className="bg-slate-800/20 backdrop-blur-xl rounded-xl border border-slate-700/20 overflow-hidden shadow-xl group">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Shovel className="w-5 h-5 text-violet-400 group-hover:text-violet-300 transition-colors" />
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400">
                      Actual de Explosivos {shiftView === "day" ? "(Día)" : shiftView === "night" ? "(Noche)" : ""}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                </div>
                <HorizontalBarChart
                  data={explosivesData}
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
