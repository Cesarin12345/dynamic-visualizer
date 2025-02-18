
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  className?: string;
  large?: boolean;
}

const KPICard = ({ title, value, className, large = false }: KPICardProps) => {
  return (
    <Card className={cn(
      "relative overflow-hidden bg-background/30 backdrop-blur-sm border-slate-800/50 transition-all duration-300 hover:bg-background/40",
      className
    )}>
      <div className={cn(
        "p-6 flex flex-col gap-2",
        large ? "p-8" : "p-6"
      )}>
        <h3 className="text-slate-400 font-medium text-sm">{title}</h3>
        <p className={cn(
          "font-semibold text-slate-100",
          large ? "text-2xl" : "text-xl"
        )}>
          {value}
        </p>
      </div>
      <div className="absolute inset-px bg-gradient-to-b from-slate-800/5 to-slate-800/20 pointer-events-none" />
    </Card>
  );
};

export default KPICard;
