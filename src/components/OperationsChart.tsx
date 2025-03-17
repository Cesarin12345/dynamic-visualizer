
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  ReferenceLine,
} from "recharts";
import { Card } from "@/components/ui/card";

interface ChartData {
  name: string;
  value1: number;
  value2: number;
  month?: string;
  date?: Date;
  kpis?: any;
}

interface OperationsChartProps {
  data: ChartData[];
  type: "line" | "bar";
  title: string;
  shift?: "day" | "night" | "both";
}

const CustomTooltip = ({ active, payload, label, type }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-lg">
        <p className="text-slate-300 font-medium mb-2">{label}</p>
        <div className="space-y-1">
          {type === "line" ? (
            <>
              <p className="text-emerald-400 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                Programado: {payload[0].value}
              </p>
              <p className="text-amber-400 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                Ejecutado: {payload[1].value}
              </p>
            </>
          ) : (
            <>
              {payload.length > 1 ? (
                <>
                  <p className="text-indigo-400 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-indigo-400 inline-block"></span>
                    Kg/Tal Día: {payload[0].value}
                  </p>
                  <p className="text-purple-400 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-purple-400 inline-block"></span>
                    Kg/Tal Noche: {payload[1].value}
                  </p>
                </>
              ) : (
                <p className={`${payload[0].name.includes("Día") ? "text-indigo-400" : "text-purple-400"} flex items-center gap-2`}>
                  <span className={`w-3 h-3 rounded-full ${payload[0].name.includes("Día") ? "bg-indigo-400" : "bg-purple-400"} inline-block`}></span>
                  Kg/Tal {payload[0].name.includes("Día") ? "Día" : "Noche"}: {payload[0].value}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
  return null;
};

const OperationsChart = ({ data, type, title, shift = "both" }: OperationsChartProps) => {
  // Si no hay datos, mostrar un mensaje
  if (!data || data.length === 0) {
    return (
      <Card className="bg-transparent border-none">
        {title && <h3 className="text-lg font-semibold text-slate-100 mb-6">{title}</h3>}
        <div className="h-[400px] w-full min-w-[300px] flex items-center justify-center">
          <p className="text-slate-400">No hay datos disponibles para el período seleccionado</p>
        </div>
      </Card>
    );
  }

  // Asegurarse de que solo tenemos a lo sumo 4 elementos
  const chartData = data.length > 4 ? data.slice(0, 4) : data;

  const renderBars = () => {
    if (shift === "both") {
      return (
        <>
          <Bar 
            name="Kg/Tal Día"
            dataKey="value1" 
            fill="#818cf8" 
            stackId="a"
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            name="Kg/Tal Noche"
            dataKey="value2" 
            fill="#a78bfa" 
            stackId="a"
            radius={[4, 4, 0, 0]}
          />
        </>
      );
    } else if (shift === "day") {
      return (
        <Bar 
          name="Kg/Tal Día"
          dataKey="value1" 
          fill="#818cf8"
          radius={[4, 4, 0, 0]}
        />
      );
    } else {
      return (
        <Bar 
          name="Kg/Tal Noche"
          dataKey="value2" 
          fill="#a78bfa"
          radius={[4, 4, 0, 0]}
        />
      );
    }
  };

  return (
    <Card className="bg-transparent border-none">
      {title && <h3 className="text-lg font-semibold text-slate-100 mb-6">{title}</h3>}
      <div className="h-[400px] w-full min-w-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          {type === "line" ? (
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey="name"
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
                tickLine={{ stroke: "#475569" }}
                axisLine={{ stroke: "#475569" }}
              />
              <YAxis
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
                tickLine={{ stroke: "#475569" }}
                axisLine={{ stroke: "#475569" }}
              />
              <Tooltip 
                content={<CustomTooltip type="line" />}
                wrapperStyle={{ outline: 'none' }}
              />
              <ReferenceLine y={100} stroke="#475569" strokeDasharray="3 3" />
              <Legend 
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ paddingTop: "10px" }}
              />
              <Line
                name="Programado"
                type="monotone"
                dataKey="value1"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: "#10b981", r: 4 }}
                activeDot={{ r: 6, fill: "#10b981", stroke: "#fff", strokeWidth: 2 }}
                animationDuration={1500}
              />
              <Line
                name="Ejecutado"
                type="monotone"
                dataKey="value2"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ fill: "#f59e0b", r: 4 }}
                activeDot={{ r: 6, fill: "#f59e0b", stroke: "#fff", strokeWidth: 2 }}
                animationDuration={1500}
              />
            </LineChart>
          ) : (
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey="name"
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
                tickLine={{ stroke: "#475569" }}
                axisLine={{ stroke: "#475569" }}
              />
              <YAxis
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
                tickLine={{ stroke: "#475569" }}
                axisLine={{ stroke: "#475569" }}
                domain={[0, 'dataMax']}
                tickCount={5}
              />
              <Tooltip 
                content={<CustomTooltip type="bar" />}
                wrapperStyle={{ outline: 'none' }}
                cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
              />
              <Legend 
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ paddingTop: "10px" }}
              />
              {renderBars()}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default OperationsChart;
