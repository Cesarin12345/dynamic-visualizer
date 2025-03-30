
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
  trendPeriod?: string; // Prop para períodos de comparación
}

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  icon,
  className,
  large = false,
  trend,
  trendValue,
  trendPeriod,
}) => {
  // Extraer solo el número de porcentaje del valor de tendencia
  const cleanTrendValue = trendValue && trendValue.match(/[\d.]+/)?.[0];
  
  // Formatear el período de comparación para que sea más conciso
  const formattedPeriod = trendPeriod ? formatComparisonPeriod(trendPeriod) : "";

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
          <div 
            className={`flex flex-col items-end gap-1`}
          >
            <div className={`flex items-center gap-1 text-sm font-medium rounded-md px-2 py-0.5 ${
              trend === 'up' 
                ? 'text-emerald-400 bg-emerald-500/10' 
                : trend === 'down' 
                  ? 'text-rose-400 bg-rose-500/10' 
                  : 'text-slate-400 bg-slate-500/10'
            }`}>
              {trend === 'up' ? (
                <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />
              ) : trend === 'down' ? (
                <TrendingDown className="w-3.5 h-3.5" strokeWidth={2.5} />
              ) : null}
              <span>{cleanTrendValue}%</span>
            </div>
            
            {formattedPeriod && (
              <span className="text-xs text-slate-500 truncate max-w-[150px]">
                {formattedPeriod}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Función para formatear el período de comparación más conciso
const formatComparisonPeriod = (period: string): string => {
  if (!period) return "";
  
  // Si el período ya tiene el formato "vs", extraemos las partes
  if (period.includes(" vs ")) {
    const [current, previous] = period.split(" vs ");
    
    // Verificamos si son semanas (formato SX)
    const currentWeek = current.match(/S(\d+)/);
    const previousWeek = previous.match(/S(\d+)/);
    
    if (currentWeek && previousWeek) {
      // Extraer años si están presentes
      const currentYear = current.match(/(\d{4})$/)?.[1];
      const previousYear = previous.match(/(\d{4})$/)?.[1];
      
      // Si son años diferentes, incluimos el año
      if (currentYear !== previousYear && currentYear && previousYear) {
        return `S${currentWeek[1]}/${currentYear.substring(2)} vs S${previousWeek[1]}/${previousYear.substring(2)}`;
      }
      
      // Si son del mismo año, solo mostramos las semanas
      return `S${currentWeek[1]} vs S${previousWeek[1]}`;
    }
    
    // Para comparaciones mensuales, abreviamos los meses y añadimos años si son diferentes
    const currentMonth = current.match(/^([A-Za-z]+)/)?.[1];
    const previousMonth = previous.match(/^([A-Za-z]+)/)?.[1];
    
    if (currentMonth && previousMonth) {
      const currentYear = current.match(/(\d{4})$/)?.[1];
      const previousYear = previous.match(/(\d{4})$/)?.[1];
      
      // Abreviar los meses (primeras 3 letras)
      const shortCurrentMonth = currentMonth.substring(0, 3);
      const shortPreviousMonth = previousMonth.substring(0, 3);
      
      // Si son años diferentes, incluimos el año
      if (currentYear !== previousYear && currentYear && previousYear) {
        return `${shortCurrentMonth}'${currentYear.substring(2)} vs ${shortPreviousMonth}'${previousYear.substring(2)}`;
      }
      
      // Si son del mismo año, solo mostramos los meses
      return `${shortCurrentMonth} vs ${shortPreviousMonth}`;
    }
  }
  
  // Si no podemos formatear, devolvemos el original
  return period;
};

export default KPICard;
