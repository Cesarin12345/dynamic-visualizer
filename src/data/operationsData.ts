
import { DateRange } from "react-day-picker";
import { addDays, isAfter, isBefore, isSameDay, isWithinInterval } from "date-fns";

// Generamos datos históricos para todo el año 2024
const generateHistoricalData = () => {
  const months = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun", 
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
  ];
  
  const weeks = Array.from({ length: 52 }, (_, i) => `S${i + 1}`);
  
  const monthlyData = months.map((month, idx) => {
    // Valores base que varían por mes
    const baseValue1 = 200 + Math.floor(Math.random() * 150);
    const baseValue2 = baseValue1 - 20 - Math.floor(Math.random() * 30);
    
    // Generar fecha para cada mes
    const date = new Date(2024, idx, 15);
    
    return {
      name: month,
      value1: baseValue1,
      value2: baseValue2,
      date,
      kpis: {
        totalProgrammed: `${(baseValue1 / 10).toFixed(1)}K`,
        efficiencyVol: `${(85 + Math.random() * 10).toFixed(1)}%`,
        executed: `${(baseValue2 / 10).toFixed(1)}K`,
        compliance: `${(90 + Math.random() * 8).toFixed(1)}%`,
        kgTal: (0.7 + Math.random() * 0.3).toFixed(1),
        fAdvance: `${(88 + Math.random() * 8).toFixed(1)}%`,
      }
    };
  });
  
  const weeklyData = weeks.map((week, idx) => {
    // Valores base que varían por semana
    const baseValue1 = 50 + Math.floor(Math.random() * 50);
    const baseValue2 = baseValue1 - 5 - Math.floor(Math.random() * 10);
    
    // Generar fecha para cada semana
    const date = addDays(new Date(2024, 0, 1), idx * 7);
    
    return {
      name: week,
      value1: baseValue1,
      value2: baseValue2,
      date,
      kpis: {
        totalProgrammed: `${(baseValue1 / 10).toFixed(1)}K`,
        efficiencyVol: `${(85 + Math.random() * 10).toFixed(1)}%`,
        executed: `${(baseValue2 / 10).toFixed(1)}K`,
        compliance: `${(90 + Math.random() * 8).toFixed(1)}%`,
        kgTal: (0.7 + Math.random() * 0.3).toFixed(1),
        fAdvance: `${(88 + Math.random() * 8).toFixed(1)}%`,
      }
    };
  });
  
  return {
    monthly: monthlyData,
    weekly: weeklyData
  };
};

// Generar aceros por fecha
const generateSteelData = () => {
  const steelTypes = [
    "Brocas de 38mm", 
    "Barra Conica 8'", 
    "Barra Conica 6'", 
    "Barra Conica 5'", 
    "Barra Conica 4'", 
    "Barra Conica 3'"
  ];
  
  // Generar datos para cada mes
  const monthlyData = Array.from({ length: 12 }, (_, monthIdx) => {
    const monthDate = new Date(2024, monthIdx, 15);
    
    // Para cada tipo de acero
    const steelItems = steelTypes.map(steelType => {
      // Valores base que varían por mes y tipo
      const baseValue = 50 + Math.floor(Math.random() * 200);
      
      return {
        name: steelType,
        value: baseValue,
        date: monthDate
      };
    });
    
    return {
      date: monthDate,
      items: steelItems
    };
  });
  
  // Generar datos para cada semana
  const weeklyData = Array.from({ length: 52 }, (_, weekIdx) => {
    const weekDate = addDays(new Date(2024, 0, 1), weekIdx * 7);
    
    // Para cada tipo de acero
    const steelItems = steelTypes.map(steelType => {
      // Valores base que varían por semana y tipo
      const baseValue = 20 + Math.floor(Math.random() * 80);
      
      return {
        name: steelType,
        value: baseValue,
        date: weekDate
      };
    });
    
    return {
      date: weekDate,
      items: steelItems
    };
  });
  
  return {
    monthly: monthlyData,
    weekly: weeklyData
  };
};

// Generar explosivos por fecha
const generateExplosivesData = () => {
  const explosiveTypes = [
    "Mecha Rapida",
    "Fanel Largo 4.8M",
    "E5000 1 X 12",
    "E3000 1 1/4 X 12",
    "E3000 1 X 12",
    "E1000 1 1/4 X 12",
    "Cordon Detonante",
    "Carmex 2 x 8",
    "Carmex 1 x 8"
  ];
  
  // Generar datos para cada mes
  const monthlyData = Array.from({ length: 12 }, (_, monthIdx) => {
    const monthDate = new Date(2024, monthIdx, 15);
    
    // Para cada tipo de explosivo
    const explosiveItems = explosiveTypes.map(explosiveType => {
      // Valores base que varían por mes y tipo
      const baseValue = 1000 + Math.floor(Math.random() * 10000);
      
      return {
        name: explosiveType,
        value: baseValue,
        date: monthDate
      };
    });
    
    return {
      date: monthDate,
      items: explosiveItems
    };
  });
  
  // Generar datos para cada semana
  const weeklyData = Array.from({ length: 52 }, (_, weekIdx) => {
    const weekDate = addDays(new Date(2024, 0, 1), weekIdx * 7);
    
    // Para cada tipo de explosivo
    const explosiveItems = explosiveTypes.map(explosiveType => {
      // Valores base que varían por semana y tipo
      const baseValue = 500 + Math.floor(Math.random() * 5000);
      
      return {
        name: explosiveType,
        value: baseValue,
        date: weekDate
      };
    });
    
    return {
      date: weekDate,
      items: explosiveItems
    };
  });
  
  return {
    monthly: monthlyData,
    weekly: weeklyData
  };
};

// Datos generados
export const operationsData = {
  operations: generateHistoricalData(),
  steel: generateSteelData(),
  explosives: generateExplosivesData()
};

// Función para filtrar datos por rango de fechas
function filterDataByDateRange(data: any[], dateRange: DateRange | undefined) {
  if (!dateRange || !dateRange.from) {
    return data;
  }
  
  return data.filter(item => {
    const itemDate = new Date(item.date);
    
    if (dateRange.to) {
      // Si hay fecha de fin, verificar que esté dentro del rango
      return isWithinInterval(itemDate, {
        start: dateRange.from,
        end: dateRange.to
      });
    } else {
      // Si solo hay fecha de inicio, verificar que sea igual o posterior
      return isSameDay(itemDate, dateRange.from) || isAfter(itemDate, dateRange.from);
    }
  });
}

// Función para procesar datos para los gráficos según filtros
export function procesarDatosParaGrafico(
  data: typeof operationsData,
  timeView: "month" | "week",
  shiftView: "day" | "night" | "both",
  dateRange: DateRange | undefined
) {
  // Seleccionar datos mensuales o semanales
  const sourceData = timeView === "month" 
    ? [...data.operations.monthly] 
    : [...data.operations.weekly];
  
  // Filtrar por rango de fechas
  const filteredData = filterDataByDateRange(sourceData, dateRange);
  
  // Si no hay datos después del filtro, devolver array vacío
  if (filteredData.length === 0) {
    return [];
  }
  
  return filteredData;
}

// Función para obtener los KPIs basados en los filtros
export function obtenerKPIs(
  data: typeof operationsData,
  shiftView: "day" | "night" | "both",
  dateRange: DateRange | undefined
) {
  // Vamos a usar los datos mensuales para obtener los KPIs
  const sourceData = [...data.operations.monthly];
  
  // Filtrar por rango de fechas
  const filteredData = filterDataByDateRange(sourceData, dateRange);
  
  // Si no hay datos después del filtro, devolver valores por defecto
  if (filteredData.length === 0) {
    return {
      totalProgrammed: "0K",
      efficiencyVol: "0%",
      executed: "0K",
      compliance: "0%",
      kgTal: "0",
      fAdvance: "0%",
    };
  }
  
  // Obtener el último KPI del periodo filtrado
  const latestKPI = filteredData[filteredData.length - 1].kpis;
  
  // Si es turno día o noche, devolvemos los KPIs tal cual
  if (shiftView !== "both") {
    return latestKPI;
  }
  
  // Si es ambos turnos, vamos a combinar los valores (simplificación)
  const combinedKPI = {
    totalProgrammed: `${(parseFloat(latestKPI.totalProgrammed.replace('K', '')) * 1.8).toFixed(1)}K`,
    efficiencyVol: latestKPI.efficiencyVol,
    executed: `${(parseFloat(latestKPI.executed.replace('K', '')) * 1.8).toFixed(1)}K`,
    compliance: latestKPI.compliance,
    kgTal: (parseFloat(latestKPI.kgTal) * 1.2).toFixed(1),
    fAdvance: latestKPI.fAdvance,
  };
  
  return combinedKPI;
}

// Función para obtener datos de aceros filtrados
export function obtenerDatosAceros(
  data: typeof operationsData,
  timeView: "month" | "week",
  shiftView: "day" | "night" | "both",
  dateRange: DateRange | undefined
) {
  // Seleccionar datos mensuales o semanales
  const sourceData = timeView === "month" 
    ? [...data.steel.monthly] 
    : [...data.steel.weekly];
  
  // Filtrar por rango de fechas
  const filteredData = filterDataByDateRange(sourceData, dateRange);
  
  // Si no hay datos después del filtro, devolver array vacío
  if (filteredData.length === 0) {
    return [];
  }
  
  // Obtener el último conjunto de datos
  const latestData = filteredData[filteredData.length - 1].items;
  
  // Si es turno día o noche, ajustamos los valores
  if (shiftView === "day") {
    return latestData.map(item => ({
      ...item,
      value: Math.floor(item.value * 1.1) // Slightly higher for day shift
    }));
  } else if (shiftView === "night") {
    return latestData.map(item => ({
      ...item,
      value: Math.floor(item.value * 0.9) // Slightly lower for night shift
    }));
  }
  
  // Para ambos turnos, devolvemos los valores originales
  return latestData;
}

// Función para obtener datos de explosivos filtrados
export function obtenerDatosExplosivos(
  data: typeof operationsData,
  timeView: "month" | "week",
  shiftView: "day" | "night" | "both",
  dateRange: DateRange | undefined
) {
  // Seleccionar datos mensuales o semanales
  const sourceData = timeView === "month" 
    ? [...data.explosives.monthly] 
    : [...data.explosives.weekly];
  
  // Filtrar por rango de fechas
  const filteredData = filterDataByDateRange(sourceData, dateRange);
  
  // Si no hay datos después del filtro, devolver array vacío
  if (filteredData.length === 0) {
    return [];
  }
  
  // Obtener el último conjunto de datos
  const latestData = filteredData[filteredData.length - 1].items;
  
  // Si es turno día o noche, ajustamos los valores
  if (shiftView === "day") {
    return latestData.map(item => ({
      ...item,
      value: Math.floor(item.value * 1.1) // Slightly higher for day shift
    }));
  } else if (shiftView === "night") {
    return latestData.map(item => ({
      ...item,
      value: Math.floor(item.value * 0.9) // Slightly lower for night shift
    }));
  }
  
  // Para ambos turnos, devolvemos los valores originales
  return latestData;
}
