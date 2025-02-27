
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

interface TimeToggleProps {
  selected: "month" | "week";
  onChange: (value: "month" | "week") => void;
}

const TimeToggle = ({ selected, onChange }: TimeToggleProps) => {
  return (
    <div className="inline-flex p-1.5 bg-slate-800/50 backdrop-blur-sm rounded-lg gap-1">
      <Button
        variant="ghost"
        className={cn(
          "px-4 py-2 transition-all duration-300 gap-2",
          selected === "month"
            ? "bg-[#7E69AB]/20 text-[#7E69AB] hover:text-[#7E69AB] hover:bg-[#7E69AB]/30"
            : "text-slate-400 hover:text-slate-100"
        )}
        onClick={() => onChange("month")}
      >
        <Calendar className="w-4 h-4" />
        Mes
      </Button>
      <Button
        variant="ghost"
        className={cn(
          "px-4 py-2 transition-all duration-300 gap-2",
          selected === "week"
            ? "bg-[#0EA5E9]/20 text-[#0EA5E9] hover:text-[#0EA5E9] hover:bg-[#0EA5E9]/30"
            : "text-slate-400 hover:text-slate-100"
        )}
        onClick={() => onChange("week")}
      >
        <Calendar className="w-4 h-4" />
        Sem
      </Button>
    </div>
  );
};

export default TimeToggle;
