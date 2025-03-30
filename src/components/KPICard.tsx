
import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  large?: boolean;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  icon,
  className,
  large = false,
  trend,
  trendValue,
}) => {
  // Extract just the percentage number from trend value (e.g., "5.2%" from "5.2%")
  const cleanTrendValue = trendValue && trendValue.match(/[\d.]+/)?.[0];

  return (
    <div
      className={cn(
        "bg-slate-800/30 backdrop-blur-xl rounded-xl border border-slate-700/30 overflow-hidden shadow-xl group hover:shadow-slate-700/20 transition-all duration-300 p-6",
        large ? "col-span-2" : "",
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">
          {title}
        </h3>
        <div className="h-8 w-8 bg-slate-700/50 rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <div className="mt-4 flex items-baseline justify-between">
        <div className={`text-2xl font-bold ${typeof value === 'string' ? 'text-white' : ''}`}>
          {value}
        </div>
        
        {trend && trendValue && (
          <div className={`flex items-center gap-1 text-sm font-medium ${
            trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-rose-400' : 'text-slate-400'
          }`}>
            {trend === 'up' ? (
              <TrendingUp className="w-4 h-4" />
            ) : trend === 'down' ? (
              <TrendingDown className="w-4 h-4" />
            ) : null}
            <span>{cleanTrendValue}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default KPICard;
