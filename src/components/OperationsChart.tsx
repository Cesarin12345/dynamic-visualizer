
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
  Defs,
  LinearGradient,
  Stop,
} from "recharts";
import { Card } from "@/components/ui/card";

interface ChartData {
  name: string;
  value1: number;
  value2: number;
}

interface OperationsChartProps {
  data: ChartData[];
  type: "line" | "bar";
  title: string;
}

const OperationsChart = ({ data, type, title }: OperationsChartProps) => {
  return (
    <Card className="p-6 bg-background/30 backdrop-blur-sm border-slate-800/50">
      <h3 className="text-lg font-semibold text-slate-100 mb-6">{title}</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {type === "line" ? (
            <LineChart data={data}>
              <Defs>
                <LinearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                  <Stop offset="0%" stopColor="#22c55e" stopColor="#22c55e" />
                  <Stop offset="100%" stopColor="#22c55e00" stopColor="#22c55e00" />
                </LinearGradient>
                <LinearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                  <Stop offset="0%" stopColor="#eab308" stopColor="#eab308" />
                  <Stop offset="100%" stopColor="#eab30800" stopColor="#eab30800" />
                </LinearGradient>
              </Defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey="name"
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
                tickLine={{ stroke: "#94a3b8" }}
              />
              <YAxis
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
                tickLine={{ stroke: "#94a3b8" }}
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
              <Line
                type="monotone"
                dataKey="value1"
                stroke="url(#gradient1)"
                strokeWidth={3}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="value2"
                stroke="url(#gradient2)"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey="name"
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
                tickLine={{ stroke: "#94a3b8" }}
              />
              <YAxis
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
                tickLine={{ stroke: "#94a3b8" }}
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
              <Bar dataKey="value1" stackId="a" fill="#f97316" />
              <Bar dataKey="value2" stackId="a" fill="#fb923c" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default OperationsChart;
