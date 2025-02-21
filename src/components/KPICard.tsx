import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number | React.ReactNode;
  className?: string;
  large?: boolean;
}

const KPICard = ({ title, value, className, large = false }: KPICardProps) => {
  return (
    <Card
      className={cn(
        "relative overflow-hidden backdrop-blur-xl border-slate-800/30",
        "group hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300",
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
        <div className={cn(
          "font-semibold text-slate-100",
          large ? "text-3xl" : "text-2xl",
          typeof value !== 'string' && typeof value !== 'number' && "!text-base"
        )}>
          {value}
        </div>
      </div>
    </Card>
  );
};

export default KPICard;
