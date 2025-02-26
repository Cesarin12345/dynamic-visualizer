
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number | React.ReactNode;
  className?: string;
  large?: boolean;
  icon?: React.ReactNode;
}

const KPICard = ({ title, value, className, large = false, icon }: KPICardProps) => {
  return (
    <Card
      className={cn(
        "relative overflow-hidden",
        "group hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300",
        "bg-gradient-to-br from-slate-800/50 to-slate-900/50",
        "backdrop-blur-xl border-slate-700/30",
        "shadow-xl shadow-slate-900/10",
        large ? "col-span-full" : "col-span-1",
        className
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/5 to-slate-900/20 pointer-events-none" />
      
      {/* Content */}
      <div className={cn(
        "relative z-10",
        large ? "p-8" : "p-6"
      )}>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="text-slate-400 font-medium text-sm">{title}</h3>
          </div>
          <ArrowUpRight 
            className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" 
          />
        </div>
        <div className={cn(
          "font-semibold text-slate-100 mt-2",
          large ? "text-3xl" : "text-2xl",
          typeof value !== 'string' && typeof value !== 'number' && "!text-base"
        )}>
          {value}
        </div>
      </div>

      {/* Hover effect gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-500/0 via-slate-500/0 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-500/10 to-transparent" />
    </Card>
  );
};

export default KPICard;
