
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/use-mobile";

interface DataItem {
  name: string;
  value: number;
}

interface HorizontalBarChartProps {
  data: DataItem[];
  title: string;
}

const HorizontalBarChart = ({ data, title }: HorizontalBarChartProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [chartWidth, setChartWidth] = useState<number | string>("100%");
  const [chartMargin, setChartMargin] = useState({ top: 5, right: 30, left: 100, bottom: 5 });
  
  useEffect(() => {
    if (isMobile) {
      setChartMargin({ top: 5, right: 5, left: 80, bottom: 5 });
    } else {
      setChartMargin({ top: 5, right: 30, left: 100, bottom: 5 });
    }
  }, [isMobile]);
  
  // Generamos colores para las barras
  const getBarColor = (index: number) => {
    const colors = [
      "#f97316", // orange-500
      "#f59e0b", // amber-500
      "#d97706", // yellow-600
      "#ea580c", // orange-600
      "#f97316", // orange-500
      "#f59e0b", // amber-500
      "#d97706", // yellow-600
      "#ea580c", // orange-600
      "#f97316", // orange-500
    ];
    return colors[index % colors.length];
  };

  // Formatear números grandes para mejorar la visualización
  const formatXAxis = (value: any): string => {
    if (typeof value === 'number' && value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  // Customizar tooltip para mejor UX
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg">
          <p className="text-slate-200 font-medium">{label}</p>
          <p className="text-orange-400">{`Cantidad: ${payload[0].value.toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={chartMargin}
        >
          <XAxis 
            type="number" 
            stroke="#94a3b8" 
            tickFormatter={formatXAxis}
            domain={[0, 'dataMax']}
          />
          <YAxis
            dataKey="name"
            type="category"
            stroke="#94a3b8"
            tick={{ fill: "#94a3b8", fontSize: isMobile ? 10 : 12 }}
            width={chartMargin.left}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Bar
            dataKey="value"
            radius={[0, 4, 4, 0]}
            barSize={isMobile ? 15 : 20}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HorizontalBarChart;
