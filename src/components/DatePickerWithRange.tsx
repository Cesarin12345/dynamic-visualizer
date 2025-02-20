
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DatePickerWithRangeProps {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
  className?: string;
  viewMode: "month" | "week";
}

const years = [2024, 2025];
const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const generateWeeks = (month: string) => {
  return [`${month}-S1`, `${month}-S2`, `${month}-S3`, `${month}-S4`];
};

export function DatePickerWithRange({
  date,
  setDate,
  className,
  viewMode
}: DatePickerWithRangeProps) {
  return (
    <div className={cn("inline-flex items-center", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "justify-start text-left font-normal bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y", { locale: es })} -{" "}
                  {format(date.to, "LLL dd, y", { locale: es })}
                </>
              ) : (
                format(date.from, "LLL dd, y", { locale: es })
              )
            ) : (
              <span>Seleccionar fecha</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 max-h-[300px]" align="start">
          <ScrollArea className="h-full max-h-[300px]">
            {viewMode === "month" ? (
              <div className="p-3 space-y-3">
                {years.map(year => (
                  <div key={year}>
                    <h3 className="font-semibold mb-2">{year}</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {months.map(month => (
                        <Button
                          key={`${month}-${year}`}
                          variant="outline"
                          className="text-sm"
                          onClick={() => {
                            const fromDate = new Date(year, months.indexOf(month), 1);
                            const toDate = new Date(year, months.indexOf(month) + 1, 0);
                            setDate({ from: fromDate, to: toDate });
                          }}
                        >
                          {month}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3 space-y-3">
                {years.map(year => (
                  <div key={year}>
                    <h3 className="font-semibold mb-2">{year}</h3>
                    <div className="space-y-2">
                      {months.map(month => (
                        <div key={`${month}-${year}`} className="space-y-1">
                          <p className="text-sm text-slate-400">{month}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {generateWeeks(month).map(week => (
                              <Button
                                key={`${week}-${year}`}
                                variant="outline"
                                className="text-sm"
                                onClick={() => {
                                  const monthIndex = months.indexOf(month);
                                  const weekNum = parseInt(week.split('-S')[1]);
                                  const fromDate = new Date(year, monthIndex, (weekNum - 1) * 7 + 1);
                                  const toDate = new Date(year, monthIndex, weekNum * 7);
                                  setDate({ from: fromDate, to: toDate });
                                }}
                              >
                                {week.split('-')[1]}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
}
