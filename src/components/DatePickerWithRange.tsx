
import { CalendarIcon, X } from "lucide-react";
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
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

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
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const MAX_SELECTIONS = 4;

  // Función para manejar la selección de un mes
  const handleMonthSelect = (month: string, year: number) => {
    const itemKey = `${month}-${year}`;
    
    // Si ya está seleccionado, quitarlo de la selección
    if (selectedItems.includes(itemKey)) {
      const newSelectedItems = selectedItems.filter(item => item !== itemKey);
      setSelectedItems(newSelectedItems);
      
      // Si no quedan items seleccionados, limpiar la fecha
      if (newSelectedItems.length === 0) {
        setDate(undefined);
        return;
      }
      
      // Actualizar el rango de fechas con los items restantes
      updateDateRangeFromSelections(newSelectedItems);
      return;
    }
    
    // Si ya tenemos el máximo de selecciones, no hacer nada
    if (selectedItems.length >= MAX_SELECTIONS) return;
    
    // Agregar a la selección
    const newSelectedItems = [...selectedItems, itemKey];
    setSelectedItems(newSelectedItems);
    
    // Actualizar el rango de fechas
    updateDateRangeFromSelections(newSelectedItems);
  };
  
  // Función para manejar la selección de una semana
  const handleWeekSelect = (week: string, year: number) => {
    const [month, weekNum] = week.split('-');
    const itemKey = `${month}-${weekNum}-${year}`;
    
    // Si ya está seleccionado, quitarlo de la selección
    if (selectedItems.includes(itemKey)) {
      const newSelectedItems = selectedItems.filter(item => item !== itemKey);
      setSelectedItems(newSelectedItems);
      
      // Si no quedan items seleccionados, limpiar la fecha
      if (newSelectedItems.length === 0) {
        setDate(undefined);
        return;
      }
      
      // Actualizar el rango de fechas con los items restantes
      updateDateRangeFromSelections(newSelectedItems);
      return;
    }
    
    // Si ya tenemos el máximo de selecciones, no hacer nada
    if (selectedItems.length >= MAX_SELECTIONS) return;
    
    // Agregar a la selección
    const newSelectedItems = [...selectedItems, itemKey];
    setSelectedItems(newSelectedItems);
    
    // Actualizar el rango de fechas
    updateDateRangeFromSelections(newSelectedItems);
  };
  
  // Función para actualizar el rango de fechas basado en las selecciones
  const updateDateRangeFromSelections = (items: string[]) => {
    if (items.length === 0) {
      setDate(undefined);
      return;
    }
    
    // Encontrar la fecha más temprana y la más tardía
    let earliestDate: Date | null = null;
    let latestDate: Date | null = null;
    
    items.forEach(item => {
      let fromDate, toDate;
      
      if (viewMode === "month") {
        const [month, year] = item.split('-');
        const monthIndex = months.indexOf(month);
        if (monthIndex !== -1) {
          fromDate = new Date(parseInt(year), monthIndex, 1);
          toDate = new Date(parseInt(year), monthIndex + 1, 0);
        }
      } else {
        const [month, weekNum, year] = item.split('-');
        const monthIndex = months.indexOf(month);
        if (monthIndex !== -1) {
          const weekNumber = parseInt(weekNum.replace('S', ''));
          fromDate = new Date(parseInt(year), monthIndex, (weekNumber - 1) * 7 + 1);
          toDate = new Date(parseInt(year), monthIndex, weekNumber * 7);
        }
      }
      
      if (fromDate && (!earliestDate || fromDate < earliestDate)) {
        earliestDate = fromDate;
      }
      
      if (toDate && (!latestDate || toDate > latestDate)) {
        latestDate = toDate;
      }
    });
    
    if (earliestDate && latestDate) {
      setDate({ from: earliestDate, to: latestDate });
    }
  };
  
  // Limpiar todas las selecciones
  const clearSelections = () => {
    setSelectedItems([]);
    setDate(undefined);
  };
  
  // Verificar si un mes está seleccionado
  const isMonthSelected = (month: string, year: number) => {
    return selectedItems.includes(`${month}-${year}`);
  };
  
  // Verificar si una semana está seleccionada
  const isWeekSelected = (week: string, year: number) => {
    const [month, weekNum] = week.split('-');
    return selectedItems.includes(`${month}-${weekNum}-${year}`);
  };

  // Función segura para formatear fechas
  const formatDate = (date: Date | undefined) => {
    if (!date || isNaN(date.getTime())) {
      return "";
    }
    return format(date, "LLL dd, y", { locale: es });
  };

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "justify-start text-left font-normal bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 flex-1",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {formatDate(date.from)} -{" "}
                  {formatDate(date.to)}
                  {selectedItems.length > 1 && 
                    <Badge variant="secondary" className="ml-2">
                      {selectedItems.length} selección(es)
                    </Badge>
                  }
                </>
              ) : (
                formatDate(date.from)
              )
            ) : (
              <span>Seleccionar fecha</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-3 border-b border-slate-700/50">
            <div className="flex justify-between items-center">
              <p className="text-sm text-slate-400">Máximo {MAX_SELECTIONS} selecciones</p>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={clearSelections}
                disabled={selectedItems.length === 0}
              >
                Limpiar
              </Button>
            </div>
          </div>
          <ScrollArea className="h-[300px] w-full">
            <div className="p-3 space-y-3">
              {viewMode === "month" ? (
                <>
                  {years.map(year => (
                    <div key={year} className="mb-4">
                      <h3 className="font-semibold mb-2">{year}</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {months.map(month => (
                          <Button
                            key={`${month}-${year}`}
                            variant={isMonthSelected(month, year) ? "default" : "outline"}
                            className={cn(
                              "text-sm",
                              isMonthSelected(month, year) && "bg-purple-600 hover:bg-purple-700",
                              selectedItems.length >= MAX_SELECTIONS && !isMonthSelected(month, year) && "opacity-50 cursor-not-allowed"
                            )}
                            onClick={() => handleMonthSelect(month, year)}
                          >
                            {month}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {years.map(year => (
                    <div key={year} className="mb-4">
                      <h3 className="font-semibold mb-2">{year}</h3>
                      <div className="space-y-3">
                        {months.map(month => (
                          <div key={`${month}-${year}`} className="space-y-2">
                            <p className="text-sm text-slate-400">{month}</p>
                            <div className="grid grid-cols-2 gap-2">
                              {generateWeeks(month).map(week => (
                                <Button
                                  key={`${week}-${year}`}
                                  variant={isWeekSelected(week, year) ? "default" : "outline"}
                                  className={cn(
                                    "text-sm",
                                    isWeekSelected(week, year) && "bg-purple-600 hover:bg-purple-700",
                                    selectedItems.length >= MAX_SELECTIONS && !isWeekSelected(week, year) && "opacity-50 cursor-not-allowed"
                                  )}
                                  onClick={() => handleWeekSelect(week, year)}
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
                </>
              )}
            </div>
          </ScrollArea>
        </PopoverContent>
      </Popover>
      
      {date?.from && (
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70"
          onClick={clearSelections}
          title="Limpiar selección de fecha"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Limpiar selección</span>
        </Button>
      )}
    </div>
  );
}
