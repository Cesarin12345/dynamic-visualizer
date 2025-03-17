
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface DataItem {
  name: string;
  value: number;
}

interface HorizontalBarChartProps {
  data: DataItem[];
  title: string;
  color?: string;
}

const HorizontalBarChart = ({ data, title, color = "#f97316" }: HorizontalBarChartProps) => {
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

  return (
    <Card className="bg-transparent border-none">
      {title && <h3 className="text-lg font-semibold text-slate-100 mb-6">{title}</h3>}
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
          >
            <XAxis 
              type="number" 
              stroke="#94a3b8" 
              tickLine={{ stroke: '#475569' }}
              axisLine={{ stroke: '#475569' }}
              tick={{ fill: "#94a3b8" }}
            />
            <YAxis
              dataKey="name"
              type="category"
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8" }}
              tickLine={{ stroke: '#475569' }}
              axisLine={{ stroke: '#475569' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "0.5rem",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
              itemStyle={{ color: "#f1f5f9" }}
              labelStyle={{ color: "#94a3b8", fontWeight: "bold", marginBottom: "5px" }}
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            />
            <Bar
              dataKey="value"
              fill={color}
              radius={[0, 4, 4, 0]}
              barSize={24}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default HorizontalBarChart;
