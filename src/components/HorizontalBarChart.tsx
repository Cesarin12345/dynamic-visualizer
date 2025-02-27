
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface DataItem {
  name: string;
  value: number;
}

interface HorizontalBarChartProps {
  data: DataItem[];
  title: string;
}

const HorizontalBarChart = ({ data, title }: HorizontalBarChartProps) => {
  return (
    <Card className="p-6 bg-background/30 backdrop-blur-sm border-slate-800/50">
      <h3 className="text-lg font-semibold text-slate-100 mb-6">{title}</h3>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
          >
            <XAxis type="number" stroke="#94a3b8" />
            <YAxis
              dataKey="name"
              type="category"
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "0.5rem",
              }}
              itemStyle={{ color: "#f1f5f9" }}
              labelStyle={{ color: "#94a3b8" }}
            />
            <Bar
              dataKey="value"
              fill="#f97316"
              radius={[0, 4, 4, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default HorizontalBarChart;
