
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeToggleProps {
  selected: "month" | "week";
  onChange: (value: "month" | "week") => void;
}

const TimeToggle = ({ selected, onChange }: TimeToggleProps) => {
  return (
    <div className="inline-flex p-1 bg-slate-800/50 backdrop-blur-sm rounded-lg">
      <Button
        variant="ghost"
        className={cn(
          "px-6 py-2 transition-all duration-300",
          selected === "month"
            ? "bg-slate-700/70 text-slate-100"
            : "text-slate-400 hover:text-slate-100"
        )}
        onClick={() => onChange("month")}
      >
        Mes
      </Button>
      <Button
        variant="ghost"
        className={cn(
          "px-6 py-2 transition-all duration-300",
          selected === "week"
            ? "bg-slate-700/70 text-slate-100"
            : "text-slate-400 hover:text-slate-100"
        )}
        onClick={() => onChange("week")}
      >
        Sem
      </Button>
    </div>
  );
};

export default TimeToggle;
