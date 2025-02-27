
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
} from "recharts";
import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

interface ChartData {
  name: string;
  value1: number;
  value2: number;
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
      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg">
        <p className="text-slate-300 mb-1">{label}</p>
        {type === "line" ? (
          <>
            <p className="text-emerald-400">Programado: {payload[0].value}</p>
            <p className="text-amber-400">Ejecutado: {payload[1].value}</p>
          </>
        ) : (
          <>
            {payload.length > 1 ? (
              <>
                <p className="text-orange-400">Kg/Tal Día: {payload[0].value}</p>
                <p className="text-orange-300">Kg/Tal Noche: {payload[1].value}</p>
              </>
            ) : (
              <p className="text-orange-400">
                Kg/Tal {payload[0].name.includes("Día") ? "Día" : "Noche"}: {payload[0].value}
              </p>
            )}
          </>
        )}
      </div>
    );
  }
  return null;
};

const OperationsChart = ({ data, type, title, shift = "both" }: OperationsChartProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [chartMargin, setChartMargin] = useState({ top: 10, right: 30, left: 20, bottom: 30 });
  
  useEffect(() => {
    if (isMobile) {
      setChartMargin({ top: 10, right: 10, left: 10, bottom: 30 });
    } else {
      setChartMargin({ top: 10, right: 30, left: 20, bottom: 30 });
    }
  }, [isMobile]);

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

  const renderBars = () => {
    if (shift === "both") {
      return (
        <>
          <Bar 
            name="Kg/Tal Día"
            dataKey="value1" 
            fill="#f97316" 
            stackId="a"
          />
          <Bar 
            name="Kg/Tal Noche"
            dataKey="value2" 
            fill="#fb923c" 
            stackId="a"
          />
        </>
      );
    } else if (shift === "day") {
      return (
        <Bar 
          name="Kg/Tal Día"
          dataKey="value1" 
          fill="#f97316"
        />
      );
    } else {
      return (
        <Bar 
          name="Kg/Tal Noche"
          dataKey="value2" 
          fill="#fb923c"
        />
      );
    }
  };

  // Para el gráfico de barras, calculamos los valores máximos para el dominio
  const calculateYDomain = () => {
    if (!data || data.length === 0) return [0, 10];
    
    if (type === "bar") {
      // En gráficos de barras, obtenemos el máximo + 20% para dar espacio
      const maxValue = Math.max(
        ...data.map(item => 
          Math.max(
            item.value1 || 0, 
            item.value2 || 0
          )
        )
      );
      return [0, Math.ceil(maxValue * 1.2)];
    } else {
      // En gráficos de línea, obtenemos el máximo + 10% para dar espacio
      const maxValue = Math.max(
        ...data.map(item => 
          Math.max(
            item.value1 || 0, 
            item.value2 || 0
          )
        )
      );
      return [0, Math.ceil(maxValue * 1.1)];
    }
  };

  // Formatear números grandes
  const formatYAxis = (value: any): string => {
    if (typeof value === 'number' && value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value.toString();
  };

  return (
    <div className="h-[400px] w-full min-w-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        {type === "line" ? (
          <LineChart data={data} margin={chartMargin}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis
              dataKey="name"
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8", fontSize: isMobile ? 10 : 12 }}
              tickLine={{ stroke: "#94a3b8" }}
            />
            <YAxis
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8", fontSize: isMobile ? 10 : 12 }}
              tickLine={{ stroke: "#94a3b8" }}
              domain={calculateYDomain()}
              tickFormatter={formatYAxis}
            />
            <Tooltip 
              content={<CustomTooltip type="line" />}
              wrapperStyle={{ outline: 'none' }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: 10 }}
              verticalAlign="bottom"
              height={36}
            />
            <Line
              name="Programado"
              type="monotone"
              dataKey="value1"
              stroke="#22c55e"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              name="Ejecutado"
              type="monotone"
              dataKey="value2"
              stroke="#eab308"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        ) : (
          <BarChart data={data} margin={chartMargin}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis
              dataKey="name"
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8", fontSize: isMobile ? 10 : 12 }}
              tickLine={{ stroke: "#94a3b8" }}
            />
            <YAxis
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8", fontSize: isMobile ? 10 : 12 }}
              tickLine={{ stroke: "#94a3b8" }}
              domain={calculateYDomain()}
              tickFormatter={formatYAxis}
            />
            <Tooltip 
              content={<CustomTooltip type="bar" />}
              wrapperStyle={{ outline: 'none' }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: 10 }}
              verticalAlign="bottom"
              height={36}
            />
            {renderBars()}
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default OperationsChart;
