
import { DateRange } from "react-day-picker";
import { addDays, isAfter, isBefore, isSameDay, isWithinInterval, startOfMonth, endOfMonth } from "date-fns";

// Generamos datos históricos para todo el año 2024
const generateHistoricalData = () => {
  const months = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun", 
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
  ];
  
  const weeks = ["S1", "S2", "S3", "S4"];
  
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
  
  // Para semanas, creamos datos para cada mes con sus semanas
  const weeklyData = [];
  
  months.forEach((month, monthIdx) => {
    weeks.forEach((week, weekIdx) => {
      // Valores base que varían por semana
      const baseValue1 = 50 + Math.floor(Math.random() * 50);
      const baseValue2 = baseValue1 - 5 - Math.floor(Math.random() * 10);
      
      // Generar fecha para cada semana (aproximada dentro del mes)
      const date = new Date(2024, monthIdx, (weekIdx + 1) * 7);
      
      weeklyData.push({
        name: week,
        month: month,
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
      });
    });
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
  const weeklyData = [];
  const months = 12;
  const weeksPerMonth = 4;
  
  for (let month = 0; month < months; month++) {
    for (let week = 0; week < weeksPerMonth; week++) {
      const weekDate = new Date(2024, month, (week + 1) * 7);
      
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
      
      weeklyData.push({
        date: weekDate,
        items: steelItems
      });
    }
  }
  
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
  const weeklyData = [];
  const months = 12;
  const weeksPerMonth = 4;
  
  for (let month = 0; month < months; month++) {
    for (let week = 0; week < weeksPerMonth; week++) {
      const weekDate = new Date(2024, month, (week + 1) * 7);
      
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
      
      weeklyData.push({
        date: weekDate,
        items: explosiveItems
      });
    }
  }
  
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
  let sourceData;
  
  if (timeView === "month") {
    sourceData = [...data.operations.monthly];
  } else {
    // Para semanas, limitamos a 4 items (S1, S2, S3, S4)
    // Si hay un filtro de fecha, lo respetamos
    sourceData = [...data.operations.weekly];
    
    if (dateRange && dateRange.from) {
      // Filtrar por el rango de fechas
      sourceData = filterDataByDateRange(sourceData, dateRange);
      
      // Extraer solo las semanas (S1, S2, S3, S4) - máximo 4
      const uniqueWeeks = Array.from(new Set(sourceData.map(item => item.name)));
      const limitedWeeks = uniqueWeeks.slice(0, 4);
      
      // Filtrar para mostrar solo esas semanas
      sourceData = sourceData.filter(item => limitedWeeks.includes(item.name));
    } else {
      // Si no hay filtro de fecha, mostrar solo las primeras 4 semanas del año
      sourceData = sourceData.slice(0, 4);
    }
  }
  
  // Filtrar por rango de fechas
  const filteredData = filterDataByDateRange(sourceData, dateRange);
  
  // Si no hay datos después del filtro, devolver array vacío
  if (filteredData.length === 0) {
    return [];
  }
  
  // Para vista semanal, asegurarnos de que solo mostramos como máximo 4 items
  if (timeView === "week" && filteredData.length > 4) {
    return filteredData.slice(0, 4);
  }
  
  return filteredData;
}

// Función para obtener los KPIs basados en los filtros
export function obtenerKPIs(
  data: typeof operationsData,
  shiftView: "day" | "night" | "both",
  dateRange: DateRange | undefined,
  timeView?: "month" | "week"
) {
  // Vamos a usar los datos mensuales o semanales según el timeView
  let sourceData;
  
  if (timeView === "week") {
    sourceData = [...data.operations.weekly];
  } else {
    sourceData = [...data.operations.monthly];
  }
  
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
  
  // Obtener el último KPI del periodo filtrado para representar el periodo actual
  const latestKPI = filteredData[filteredData.length - 1].kpis;
  
  // Si es timeView es semana, ajustamos los valores para que sean más pequeños
  let adjustedKPI = { ...latestKPI };
  
  if (timeView === "week") {
    adjustedKPI = {
      totalProgrammed: `${(parseFloat(latestKPI.totalProgrammed.replace('K', '')) * 0.25).toFixed(1)}K`,
      efficiencyVol: `${(parseFloat(latestKPI.efficiencyVol.replace('%', '')) * 0.85).toFixed(1)}%`,
      executed: `${(parseFloat(latestKPI.executed.replace('K', '')) * 0.25).toFixed(1)}K`,
      compliance: `${(parseFloat(latestKPI.compliance.replace('%', '')) * 0.9).toFixed(1)}%`,
      kgTal: (parseFloat(latestKPI.kgTal) * 0.8).toFixed(1),
      fAdvance: `${(parseFloat(latestKPI.fAdvance.replace('%', '')) * 0.9).toFixed(1)}%`,
    };
  }
  
  // Si es turno día o noche, devolvemos los KPIs tal cual
  if (shiftView !== "both") {
    return adjustedKPI;
  }
  
  // Si es ambos turnos, vamos a combinar los valores (simplificación)
  const combinedKPI = {
    totalProgrammed: `${(parseFloat(adjustedKPI.totalProgrammed.replace('K', '')) * 1.8).toFixed(1)}K`,
    efficiencyVol: adjustedKPI.efficiencyVol,
    executed: `${(parseFloat(adjustedKPI.executed.replace('K', '')) * 1.8).toFixed(1)}K`,
    compliance: adjustedKPI.compliance,
    kgTal: (parseFloat(adjustedKPI.kgTal) * 1.2).toFixed(1),
    fAdvance: adjustedKPI.fAdvance,
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
