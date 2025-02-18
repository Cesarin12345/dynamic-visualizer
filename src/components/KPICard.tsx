
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  className?: string;
  large?: boolean;
}

const KPICard = ({ title, value, className, large = false }: KPICardProps) => {
  return (
    <Card
      className={cn(
        "relative overflow-hidden backdrop-blur-sm border-slate-800/50 transition-all duration-300",
        "group hover:scale-[1.02] hover:-translate-y-0.5",
        className
      )}
    >
      <div
        className={cn(
          "p-6 flex flex-col gap-2",
          large ? "p-8" : "p-6"
        )}
      >
        <div className="flex justify-between items-start">
          <h3 className="text-slate-400 font-medium text-sm">{title}</h3>
          <ArrowUpRight className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className={cn(
          "font-semibold text-slate-100",
          large ? "text-3xl" : "text-2xl"
        )}>
          {value}
        </p>
      </div>
      <div className="absolute inset-px bg-gradient-to-b from-slate-800/5 to-slate-800/20 pointer-events-none" />
    </Card>
  );
};

export default KPICard;
