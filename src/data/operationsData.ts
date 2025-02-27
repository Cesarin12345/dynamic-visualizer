
import { DateRange } from "react-day-picker";

export interface OperationDataItem {
  semana: string;
  mes: string;
  mesCorto: string;
  guardia: string;
  fechaInicio: string;
  totalDias: number;
  kgTal: number;
  avanceEjec: number;
  promEficienciaVol: string;
  promFA: number;
  avanceProgramado: number;
  avancePorcentaje: string;
  ordenMes: number;
  anual: number;
  mesContable: string;
}

export const operationsData: OperationDataItem[] = [
  { semana: "S2", mes: "enero", mesCorto: "Jan", guardia: "Día", fechaInicio: "2024-01-01", totalDias: 6, kgTal: 0.96, avanceEjec: 34.6, promEficienciaVol: "91%", promFA: 16.06, avanceProgramado: 45, avancePorcentaje: "77%", ordenMes: 1, anual: 2024, mesContable: "enero" },
  { semana: "S2", mes: "enero", mesCorto: "Jan", guardia: "Noche", fechaInicio: "2024-01-01", totalDias: 6, kgTal: 0.69, avanceEjec: 34.6, promEficienciaVol: "92%", promFA: 15.34, avanceProgramado: 45, avancePorcentaje: "77%", ordenMes: 1, anual: 2024, mesContable: "enero" },
  { semana: "S3", mes: "enero", mesCorto: "Jan", guardia: "Día", fechaInicio: "2024-01-07", totalDias: 7, kgTal: 1.09, avanceEjec: 41.2, promEficienciaVol: "94%", promFA: 18.16, avanceProgramado: 45, avancePorcentaje: "92%", ordenMes: 1, anual: 2024, mesContable: "enero" },
  { semana: "S3", mes: "enero", mesCorto: "Jan", guardia: "Noche", fechaInicio: "2024-01-07", totalDias: 7, kgTal: 0.87, avanceEjec: 27, promEficienciaVol: "94%", promFA: 15.06, avanceProgramado: 45, avancePorcentaje: "60%", ordenMes: 1, anual: 2024, mesContable: "enero" },
  { semana: "S4", mes: "enero", mesCorto: "Jan", guardia: "Día", fechaInicio: "2024-01-14", totalDias: 10, kgTal: 1.01, avanceEjec: 82.85, promEficienciaVol: "93%", promFA: 21.55, avanceProgramado: 65, avancePorcentaje: "127%", ordenMes: 1, anual: 2024, mesContable: "enero" },
  { semana: "S4", mes: "enero", mesCorto: "Jan", guardia: "Noche", fechaInicio: "2024-01-14", totalDias: 10, kgTal: 0.98, avanceEjec: 51.1, promEficienciaVol: "93%", promFA: 15.59, avanceProgramado: 65, avancePorcentaje: "79%", ordenMes: 1, anual: 2024, mesContable: "enero" },
  { semana: "S1", mes: "febrero", mesCorto: "Feb", guardia: "Día", fechaInicio: "2024-01-24", totalDias: 11, kgTal: 0.63, avanceEjec: 48.2, promEficienciaVol: "92%", promFA: 13.51, avanceProgramado: 67, avancePorcentaje: "72%", ordenMes: 2, anual: 2024, mesContable: "febrero" },
  { semana: "S1", mes: "febrero", mesCorto: "Feb", guardia: "Noche", fechaInicio: "2024-01-25", totalDias: 10, kgTal: 0.56, avanceEjec: 44.8, promEficienciaVol: "91%", promFA: 12.09, avanceProgramado: 67, avancePorcentaje: "67%", ordenMes: 2, anual: 2024, mesContable: "febrero" },
  { semana: "S2", mes: "febrero", mesCorto: "Feb", guardia: "Día", fechaInicio: "2024-02-04", totalDias: 6, kgTal: 0.44, avanceEjec: 26.4, promEficienciaVol: "96%", promFA: 10.54, avanceProgramado: 43, avancePorcentaje: "62%", ordenMes: 2, anual: 2024, mesContable: "febrero" },
  { semana: "S2", mes: "febrero", mesCorto: "Feb", guardia: "Noche", fechaInicio: "2024-02-04", totalDias: 7, kgTal: 0.49, avanceEjec: 32.1, promEficienciaVol: "93%", promFA: 11.38, avanceProgramado: 43, avancePorcentaje: "76%", ordenMes: 2, anual: 2024, mesContable: "febrero" },
  { semana: "S3", mes: "febrero", mesCorto: "Feb", guardia: "Día", fechaInicio: "2024-02-11", totalDias: 7, kgTal: 0.61, avanceEjec: 32.2, promEficienciaVol: "90%", promFA: 15.13, avanceProgramado: 43, avancePorcentaje: "76%", ordenMes: 2, anual: 2024, mesContable: "febrero" },
  { semana: "S3", mes: "febrero", mesCorto: "Feb", guardia: "Noche", fechaInicio: "2024-02-11", totalDias: 7, kgTal: 0.67, avanceEjec: 45.1, promEficienciaVol: "93%", promFA: 16.56, avanceProgramado: 43, avancePorcentaje: "106%", ordenMes: 2, anual: 2024, mesContable: "febrero" },
  { semana: "S4", mes: "febrero", mesCorto: "Feb", guardia: "Día", fechaInicio: "2024-02-18", totalDias: 5, kgTal: 0.79, avanceEjec: 26.4, promEficienciaVol: "95%", promFA: 18.31, avanceProgramado: 36, avancePorcentaje: "73%", ordenMes: 2, anual: 2024, mesContable: "febrero" },
  { semana: "S4", mes: "febrero", mesCorto: "Feb", guardia: "Noche", fechaInicio: "2024-02-18", totalDias: 5, kgTal: 0.60, avanceEjec: 17.1, promEficienciaVol: "90%", promFA: 14.48, avanceProgramado: 36, avancePorcentaje: "48%", ordenMes: 2, anual: 2024, mesContable: "febrero" },
  { semana: "S1", mes: "marzo", mesCorto: "Mar", guardia: "Día", fechaInicio: "2024-02-24", totalDias: 8, kgTal: 1.08, avanceEjec: 29.1, promEficienciaVol: "88%", promFA: 29.92, avanceProgramado: 43, avancePorcentaje: "68%", ordenMes: 3, anual: 2024, mesContable: "marzo" },
  { semana: "S1", mes: "marzo", mesCorto: "Mar", guardia: "Noche", fechaInicio: "2024-02-24", totalDias: 8, kgTal: 1.22, avanceEjec: 36.1, promEficienciaVol: "88%", promFA: 31.78, avanceProgramado: 43, avancePorcentaje: "85%", ordenMes: 3, anual: 2024, mesContable: "marzo" },
  { semana: "S2", mes: "marzo", mesCorto: "Mar", guardia: "Día", fechaInicio: "2024-03-03", totalDias: 7, kgTal: 1.08, avanceEjec: 27.4, promEficienciaVol: "91%", promFA: 29.03, avanceProgramado: 38, avancePorcentaje: "73%", ordenMes: 3, anual: 2024, mesContable: "marzo" },
  { semana: "S2", mes: "marzo", mesCorto: "Mar", guardia: "Noche", fechaInicio: "2024-03-03", totalDias: 7, kgTal: 1.34, avanceEjec: 45.2, promEficienciaVol: "90%", promFA: 34.41, avanceProgramado: 38, avancePorcentaje: "121%", ordenMes: 3, anual: 2024, mesContable: "marzo" },
  { semana: "S3", mes: "marzo", mesCorto: "Mar", guardia: "Día", fechaInicio: "2024-03-10", totalDias: 7, kgTal: 0.88, avanceEjec: 34.2, promEficienciaVol: "89%", promFA: 23.18, avanceProgramado: 38, avancePorcentaje: "91%", ordenMes: 3, anual: 2024, mesContable: "marzo" },
  { semana: "S3", mes: "marzo", mesCorto: "Mar", guardia: "Noche", fechaInicio: "2024-03-10", totalDias: 7, kgTal: 1.00, avanceEjec: 29, promEficienciaVol: "87%", promFA: 24.63, avanceProgramado: 38, avancePorcentaje: "77%", ordenMes: 3, anual: 2024, mesContable: "marzo" },
  { semana: "S4", mes: "marzo", mesCorto: "Mar", guardia: "Día", fechaInicio: "2024-03-17", totalDias: 7, kgTal: 0.61, avanceEjec: 34.25, promEficienciaVol: "90%", promFA: 15.08, avanceProgramado: 38, avancePorcentaje: "91%", ordenMes: 3, anual: 2024, mesContable: "marzo" },
  { semana: "S4", mes: "marzo", mesCorto: "Mar", guardia: "Noche", fechaInicio: "2024-03-17", totalDias: 7, kgTal: 0.62, avanceEjec: 34.5, promEficienciaVol: "89%", promFA: 16.14, avanceProgramado: 38, avancePorcentaje: "92%", ordenMes: 3, anual: 2024, mesContable: "marzo" },
  { semana: "S1", mes: "abril", mesCorto: "Apr", guardia: "Día", fechaInicio: "2024-03-24", totalDias: 7, kgTal: 0.69, avanceEjec: 32.3, promEficienciaVol: "92%", promFA: 15.33, avanceProgramado: 27, avancePorcentaje: "122%", ordenMes: 4, anual: 2024, mesContable: "abril" },
  { semana: "S1", mes: "abril", mesCorto: "Apr", guardia: "Noche", fechaInicio: "2024-03-24", totalDias: 7, kgTal: 0.72, avanceEjec: 23.4, promEficienciaVol: "90%", promFA: 16.24, avanceProgramado: 27, avancePorcentaje: "88%", ordenMes: 4, anual: 2024, mesContable: "abril" },
  { semana: "S2", mes: "abril", mesCorto: "Apr", guardia: "Día", fechaInicio: "2024-03-31", totalDias: 7, kgTal: 0.72, avanceEjec: 24.3, promEficienciaVol: "92%", promFA: 14.61, avanceProgramado: 27, avancePorcentaje: "92%", ordenMes: 4, anual: 2024, mesContable: "abril" },
  { semana: "S2", mes: "abril", mesCorto: "Apr", guardia: "Noche", fechaInicio: "2024-03-31", totalDias: 7, kgTal: 0.66, avanceEjec: 26.3, promEficienciaVol: "89%", promFA: 13.57, avanceProgramado: 27, avancePorcentaje: "99%", ordenMes: 4, anual: 2024, mesContable: "abril" },
  { semana: "S3", mes: "abril", mesCorto: "Apr", guardia: "Día", fechaInicio: "2024-04-07", totalDias: 7, kgTal: 0.66, avanceEjec: 18.5, promEficienciaVol: "90%", promFA: 13.91, avanceProgramado: 27, avancePorcentaje: "70%", ordenMes: 4, anual: 2024, mesContable: "abril" },
  { semana: "S3", mes: "abril", mesCorto: "Apr", guardia: "Noche", fechaInicio: "2024-04-07", totalDias: 6, kgTal: 0.73, avanceEjec: 20.3, promEficienciaVol: "92%", promFA: 13.34, avanceProgramado: 27, avancePorcentaje: "77%", ordenMes: 4, anual: 2024, mesContable: "abril" },
  { semana: "S4", mes: "abril", mesCorto: "Apr", guardia: "Noche", fechaInicio: "2024-04-15", totalDias: 9, kgTal: 0.69, avanceEjec: 28.3, promEficienciaVol: "93%", promFA: 15.92, avanceProgramado: 38, avancePorcentaje: "74%", ordenMes: 4, anual: 2024, mesContable: "abril" },
  { semana: "S4", mes: "abril", mesCorto: "Apr", guardia: "Día", fechaInicio: "2024-04-16", totalDias: 8, kgTal: 0.71, avanceEjec: 27.4, promEficienciaVol: "94%", promFA: 15.15, avanceProgramado: 38, avancePorcentaje: "72%", ordenMes: 4, anual: 2024, mesContable: "abril" },
  { semana: "S1", mes: "mayo", mesCorto: "May", guardia: "Día", fechaInicio: "2024-04-24", totalDias: 9, kgTal: 0.71, avanceEjec: 24.3, promEficienciaVol: "95%", promFA: 18.78, avanceProgramado: 78, avancePorcentaje: "31%", ordenMes: 5, anual: 2024, mesContable: "mayo" },
  { semana: "S1", mes: "mayo", mesCorto: "May", guardia: "Noche", fechaInicio: "2024-04-24", totalDias: 10, kgTal: 0.63, avanceEjec: 36.4, promEficienciaVol: "94%", promFA: 19.60, avanceProgramado: 78, avancePorcentaje: "47%", ordenMes: 5, anual: 2024, mesContable: "mayo" },
  { semana: "S2", mes: "mayo", mesCorto: "May", guardia: "Día", fechaInicio: "2024-05-05", totalDias: 7, kgTal: 0.99, avanceEjec: 26.5, promEficienciaVol: "87%", promFA: 24.87, avanceProgramado: 50, avancePorcentaje: "54%", ordenMes: 5, anual: 2024, mesContable: "mayo" },
  { semana: "S2", mes: "mayo", mesCorto: "May", guardia: "Noche", fechaInicio: "2024-05-05", totalDias: 7, kgTal: 0.63, avanceEjec: 18.6, promEficienciaVol: "86%", promFA: 16.38, avanceProgramado: 50, avancePorcentaje: "38%", ordenMes: 5, anual: 2024, mesContable: "mayo" },
  { semana: "S3", mes: "mayo", mesCorto: "May", guardia: "Día", fechaInicio: "2024-05-12", totalDias: 7, kgTal: 0.88, avanceEjec: 24, promEficienciaVol: "91%", promFA: 22.06, avanceProgramado: 50, avancePorcentaje: "48%", ordenMes: 5, anual: 2024, mesContable: "mayo" },
  { semana: "S3", mes: "mayo", mesCorto: "May", guardia: "Noche", fechaInicio: "2024-05-12", totalDias: 7, kgTal: 1.07, avanceEjec: 29.95, promEficienciaVol: "89%", promFA: 24.95, avanceProgramado: 50, avancePorcentaje: "61%", ordenMes: 5, anual: 2024, mesContable: "mayo" },
  { semana: "S4", mes: "mayo", mesCorto: "May", guardia: "Día", fechaInicio: "2024-05-19", totalDias: 5, kgTal: 1.68, avanceEjec: 27.2, promEficienciaVol: "90%", promFA: 42.37, avanceProgramado: 36, avancePorcentaje: "77%", ordenMes: 5, anual: 2024, mesContable: "mayo" },
  { semana: "S4", mes: "mayo", mesCorto: "May", guardia: "Noche", fechaInicio: "2024-05-19", totalDias: 5, kgTal: 1.67, avanceEjec: 22.7, promEficienciaVol: "92%", promFA: 48.45, avanceProgramado: 36, avancePorcentaje: "64%", ordenMes: 5, anual: 2024, mesContable: "mayo" },
  { semana: "S1", mes: "junio", mesCorto: "Jun", guardia: "Día", fechaInicio: "2024-05-24", totalDias: 9, kgTal: 1.08, avanceEjec: 46.8, promEficienciaVol: "87%", promFA: 89.26, avanceProgramado: 72, avancePorcentaje: "65%", ordenMes: 6, anual: 2024, mesContable: "junio" },
  { semana: "S1", mes: "junio", mesCorto: "Jun", guardia: "Noche", fechaInicio: "2024-05-24", totalDias: 9, kgTal: 0.76, avanceEjec: 54.8, promEficienciaVol: "88%", promFA: 93.56, avanceProgramado: 72, avancePorcentaje: "77%", ordenMes: 6, anual: 2024, mesContable: "junio" },
  { semana: "S2", mes: "junio", mesCorto: "Jun", guardia: "Día", fechaInicio: "2024-06-02", totalDias: 7, kgTal: 0.81, avanceEjec: 35.7, promEficienciaVol: "92%", promFA: 22.00, avanceProgramado: 56, avancePorcentaje: "64%", ordenMes: 6, anual: 2024, mesContable: "junio" },
  { semana: "S2", mes: "junio", mesCorto: "Jun", guardia: "Noche", fechaInicio: "2024-06-02", totalDias: 7, kgTal: 1.12, avanceEjec: 21.7, promEficienciaVol: "94%", promFA: 25.78, avanceProgramado: 56, avancePorcentaje: "39%", ordenMes: 6, anual: 2024, mesContable: "junio" },
  { semana: "S3", mes: "junio", mesCorto: "Jun", guardia: "Día", fechaInicio: "2024-06-09", totalDias: 7, kgTal: 1.93, avanceEjec: 24.9, promEficienciaVol: "96%", promFA: 31.27, avanceProgramado: 56, avancePorcentaje: "45%", ordenMes: 6, anual: 2024, mesContable: "junio" },
  { semana: "S3", mes: "junio", mesCorto: "Jun", guardia: "Noche", fechaInicio: "2024-06-09", totalDias: 6, kgTal: 0.96, avanceEjec: 11.1, promEficienciaVol: "90%", promFA: 22.06, avanceProgramado: 56, avancePorcentaje: "20%", ordenMes: 6, anual: 2024, mesContable: "junio" },
  { semana: "S4", mes: "junio", mesCorto: "Jun", guardia: "Noche", fechaInicio: "2024-06-17", totalDias: 7, kgTal: 0.83, avanceEjec: 30.9, promEficienciaVol: "94%", promFA: 33.74, avanceProgramado: 64, avancePorcentaje: "49%", ordenMes: 6, anual: 2024, mesContable: "junio" },
  { semana: "S4", mes: "junio", mesCorto: "Jun", guardia: "Día", fechaInicio: "2024-06-19", totalDias: 5, kgTal: 1.01, avanceEjec: 38.7, promEficienciaVol: "90%", promFA: 41.24, avanceProgramado: 64, avancePorcentaje: "61%", ordenMes: 6, anual: 2024, mesContable: "junio" },
  { semana: "S1", mes: "agosto", mesCorto: "Aug", guardia: "Día", fechaInicio: "2024-07-24", totalDias: 30, kgTal: 1.19, avanceEjec: 28.3, promEficienciaVol: "92%", promFA: 25.59, avanceProgramado: 23, avancePorcentaje: "74%", ordenMes: 8, anual: 2024, mesContable: "agosto" },
  { semana: "S1", mes: "agosto", mesCorto: "Aug", guardia: "Noche", fechaInicio: "2024-07-24", totalDias: 30, kgTal: 1.24, avanceEjec: 27.4, promEficienciaVol: "87%", promFA: 27.24, avanceProgramado: 23, avancePorcentaje: "84%", ordenMes: 8, anual: 2024, mesContable: "agosto" },
  { semana: "S3", mes: "agosto", mesCorto: "Aug", guardia: "Noche", fechaInicio: "2024-08-16", totalDias: 1, kgTal: 0.70, avanceEjec: 24.3, promEficienciaVol: "94%", promFA: 6.98, avanceProgramado: 74, avancePorcentaje: "39%", ordenMes: 8, anual: 2024, mesContable: "agosto" },
  { semana: "S4", mes: "agosto", mesCorto: "Aug", guardia: "Noche", fechaInicio: "2024-08-18", totalDias: 5, kgTal: 0.58, avanceEjec: 36.4, promEficienciaVol: "96%", promFA: 14.67, avanceProgramado: 56, avancePorcentaje: "65%", ordenMes: 8, anual: 2024, mesContable: "agosto" },
  { semana: "S4", mes: "agosto", mesCorto: "Aug", guardia: "Día", fechaInicio: "2024-08-20", totalDias: 3, kgTal: 0.60, avanceEjec: 49.1, promEficienciaVol: "94%", promFA: 15.74, avanceProgramado: 56, avancePorcentaje: "88%", ordenMes: 8, anual: 2024, mesContable: "agosto" },
  { semana: "S1", mes: "septiembre", mesCorto: "Sep", guardia: "Día", fechaInicio: "2024-08-24", totalDias: 8, kgTal: 1.02, avanceEjec: 46.7, promEficienciaVol: "89%", promFA: 24.89, avanceProgramado: 70, avancePorcentaje: "67%", ordenMes: 9, anual: 2024, mesContable: "septiembre" },
  { semana: "S1", mes: "septiembre", mesCorto: "Sep", guardia: "Noche", fechaInicio: "2024-08-24", totalDias: 8, kgTal: 1.12, avanceEjec: 54, promEficienciaVol: "90%", promFA: 26.01, avanceProgramado: 70, avancePorcentaje: "77%", ordenMes: 9, anual: 2024, mesContable: "septiembre" },
  { semana: "S2", mes: "septiembre", mesCorto: "Sep", guardia: "Día", fechaInicio: "2024-09-01", totalDias: 7, kgTal: 0.92, avanceEjec: 48.5, promEficienciaVol: "96%", promFA: 22.00, avanceProgramado: 70, avancePorcentaje: "69%", ordenMes: 9, anual: 2024, mesContable: "septiembre" },
  { semana: "S2", mes: "septiembre", mesCorto: "Sep", guardia: "Noche", fechaInicio: "2024-09-01", totalDias: 7, kgTal: 1.04, avanceEjec: 50.5, promEficienciaVol: "90%", promFA: 25.70, avanceProgramado: 70, avancePorcentaje: "72%", ordenMes: 9, anual: 2024, mesContable: "septiembre" },
  { semana: "S3", mes: "septiembre", mesCorto: "Sep", guardia: "Día", fechaInicio: "2024-09-08", totalDias: 7, kgTal: 1.07, avanceEjec: 39.3, promEficienciaVol: "86%", promFA: 25.33, avanceProgramado: 70, avancePorcentaje: "56%", ordenMes: 9, anual: 2024, mesContable: "septiembre" },
  { semana: "S3", mes: "septiembre", mesCorto: "Sep", guardia: "Noche", fechaInicio: "2024-09-08", totalDias: 7, kgTal: 1.08, avanceEjec: 49.1, promEficienciaVol: "86%", promFA: 26.08, avanceProgramado: 70, avancePorcentaje: "70%", ordenMes: 9, anual: 2024, mesContable: "septiembre" },
  { semana: "S4", mes: "septiembre", mesCorto: "Sep", guardia: "Día", fechaInicio: "2024-09-15", totalDias: 9, kgTal: 0.76, avanceEjec: 37.1, promEficienciaVol: "90%", promFA: 17.32, avanceProgramado: 70, avancePorcentaje: "53%", ordenMes: 9, anual: 2024, mesContable: "septiembre" },
  { semana: "S4", mes: "septiembre", mesCorto: "Sep", guardia: "Noche", fechaInicio: "2024-09-15", totalDias: 9, kgTal: 0.81, avanceEjec: 50.9, promEficienciaVol: "89%", promFA: 18.13, avanceProgramado: 70, avancePorcentaje: "73%", ordenMes: 9, anual: 2024, mesContable: "septiembre" },
  { semana: "S1", mes: "octubre", mesCorto: "Oct", guardia: "Día", fechaInicio: "2024-09-24", totalDias: 12, kgTal: 1.12, avanceEjec: 49.7, promEficienciaVol: "93%", promFA: 25.78, avanceProgramado: 105, avancePorcentaje: "48%", ordenMes: 10, anual: 2024, mesContable: "octubre" },
  { semana: "S1", mes: "octubre", mesCorto: "Oct", guardia: "Noche", fechaInicio: "2024-09-24", totalDias: 12, kgTal: 1.93, avanceEjec: 84.4, promEficienciaVol: "91%", promFA: 31.27, avanceProgramado: 105, avancePorcentaje: "81%", ordenMes: 10, anual: 2024, mesContable: "octubre" },
  { semana: "S2", mes: "octubre", mesCorto: "Oct", guardia: "Día", fechaInicio: "2024-10-06", totalDias: 7, kgTal: 1.09, avanceEjec: 43.9, promEficienciaVol: "90%", promFA: 24.57, avanceProgramado: 61, avancePorcentaje: "72%", ordenMes: 10, anual: 2024, mesContable: "octubre" },
  { semana: "S2", mes: "octubre", mesCorto: "Oct", guardia: "Noche", fechaInicio: "2024-10-06", totalDias: 7, kgTal: 0.87, avanceEjec: 42.6, promEficienciaVol: "98%", promFA: 20.29, avanceProgramado: 61, avancePorcentaje: "70%", ordenMes: 10, anual: 2024, mesContable: "octubre" },
  { semana: "S3", mes: "octubre", mesCorto: "Oct", guardia: "Día", fechaInicio: "2024-10-13", totalDias: 7, kgTal: 0.90, avanceEjec: 28.7, promEficienciaVol: "87%", promFA: 20.86, avanceProgramado: 61, avancePorcentaje: "47%", ordenMes: 10, anual: 2024, mesContable: "octubre" },
  { semana: "S3", mes: "octubre", mesCorto: "Oct", guardia: "Noche", fechaInicio: "2024-10-13", totalDias: 7, kgTal: 0.77, avanceEjec: 23.6, promEficienciaVol: "85%", promFA: 20.04, avanceProgramado: 61, avancePorcentaje: "39%", ordenMes: 10, anual: 2024, mesContable: "octubre" },
  { semana: "S4", mes: "octubre", mesCorto: "Oct", guardia: "Día", fechaInicio: "2024-10-20", totalDias: 4, kgTal: 0.96, avanceEjec: 17.85, promEficienciaVol: "86%", promFA: 20.68, avanceProgramado: 35, avancePorcentaje: "51%", ordenMes: 10, anual: 2024, mesContable: "octubre" },
  { semana: "S4", mes: "octubre", mesCorto: "Oct", guardia: "Noche", fechaInicio: "2024-10-20", totalDias: 4, kgTal: 0.83, avanceEjec: 19.45, promEficienciaVol: "84%", promFA: 18.10, avanceProgramado: 35, avancePorcentaje: "56%", ordenMes: 10, anual: 2024, mesContable: "octubre" },
  { semana: "S1", mes: "noviembre", mesCorto: "Nov", guardia: "Día", fechaInicio: "2024-10-24", totalDias: 10, kgTal: 1.01, avanceEjec: 43.5, promEficienciaVol: "89%", promFA: 20.71, avanceProgramado: 83, avancePorcentaje: "53%", ordenMes: 11, anual: 2024, mesContable: "noviembre" },
  { semana: "S1", mes: "noviembre", mesCorto: "Nov", guardia: "Noche", fechaInicio: "2024-10-24", totalDias: 10, kgTal: 0.98, avanceEjec: 43.6, promEficienciaVol: "85%", promFA: 21.70, avanceProgramado: 83, avancePorcentaje: "53%", ordenMes: 11, anual: 2024, mesContable: "noviembre" },
  { semana: "S2", mes: "noviembre", mesCorto: "Nov", guardia: "Día", fechaInicio: "2024-11-03", totalDias: 7, kgTal: 0.94, avanceEjec: 48.1, promEficienciaVol: "97%", promFA: 17.09, avanceProgramado: 58, avancePorcentaje: "84%", ordenMes: 11, anual: 2024, mesContable: "noviembre" },
  { semana: "S2", mes: "noviembre", mesCorto: "Nov", guardia: "Noche", fechaInicio: "2024-11-03", totalDias: 7, kgTal: 1.04, avanceEjec: 38.3, promEficienciaVol: "89%", promFA: 24.57, avanceProgramado: 58, avancePorcentaje: "67%", ordenMes: 11, anual: 2024, mesContable: "noviembre" },
  { semana: "S3", mes: "noviembre", mesCorto: "Nov", guardia: "Día", fechaInicio: "2024-11-10", totalDias: 7, kgTal: 0.77, avanceEjec: 54.5, promEficienciaVol: "86%", promFA: 15.37, avanceProgramado: 58, avancePorcentaje: "95%", ordenMes: 11, anual: 2024, mesContable: "noviembre" },
  { semana: "S3", mes: "noviembre", mesCorto: "Nov", guardia: "Noche", fechaInicio: "2024-11-10", totalDias: 7, kgTal: 0.98, avanceEjec: 46.7, promEficienciaVol: "87%", promFA: 19.82, avanceProgramado: 58, avancePorcentaje: "81%", ordenMes: 11, anual: 2024, mesContable: "noviembre" },
  { semana: "S4", mes: "noviembre", mesCorto: "Nov", guardia: "Día", fechaInicio: "2024-11-17", totalDias: 7, kgTal: 0.72, avanceEjec: 25.9, promEficienciaVol: "87%", promFA: 16.60, avanceProgramado: 58, avancePorcentaje: "45%", ordenMes: 11, anual: 2024, mesContable: "noviembre" },
  { semana: "S4", mes: "noviembre", mesCorto: "Nov", guardia: "Noche", fechaInicio: "2024-11-17", totalDias: 6, kgTal: 0.69, avanceEjec: 19.9, promEficienciaVol: "92%", promFA: 15.48, avanceProgramado: 58, avancePorcentaje: "35%", ordenMes: 11, anual: 2024, mesContable: "noviembre" },
  { semana: "S1", mes: "diciembre", mesCorto: "Dec", guardia: "Día", fechaInicio: "2024-11-24", totalDias: 7, kgTal: 1.04, avanceEjec: 43.4, promEficienciaVol: "91%", promFA: 20.46, avanceProgramado: 55, avancePorcentaje: "79%", ordenMes: 12, anual: 2024, mesContable: "diciembre" },
  { semana: "S1", mes: "diciembre", mesCorto: "Dec", guardia: "Noche", fechaInicio: "2024-11-24", totalDias: 7, kgTal: 0.63, avanceEjec: 31.6, promEficienciaVol: "93%", promFA: 12.96, avanceProgramado: 55, avancePorcentaje: "57%", ordenMes: 12, anual: 2024, mesContable: "diciembre" },
  { semana: "S2", mes: "diciembre", mesCorto: "Dec", guardia: "Día", fechaInicio: "2024-12-01", totalDias: 6, kgTal: 0.99, avanceEjec: 41.9, promEficienciaVol: "95%", promFA: 18.45, avanceProgramado: 55, avancePorcentaje: "76%", ordenMes: 12, anual: 2024, mesContable: "diciembre" },
  { semana: "S2", mes: "diciembre", mesCorto: "Dec", guardia: "Noche", fechaInicio: "2024-12-01", totalDias: 6, kgTal: 1.07, avanceEjec: 40.8, promEficienciaVol: "92%", promFA: 20.92, avanceProgramado: 55, avancePorcentaje: "74%", ordenMes: 12, anual: 2024, mesContable: "diciembre" },
  { semana: "S3", mes: "diciembre", mesCorto: "Dec", guardia: "Día", fechaInicio: "2024-12-08", totalDias: 7, kgTal: 0.99, avanceEjec: 46.7, promEficienciaVol: "94%", promFA: 18.24, avanceProgramado: 55, avancePorcentaje: "85%", ordenMes: 12, anual: 2024, mesContable: "diciembre" },
  { semana: "S3", mes: "diciembre", mesCorto: "Dec", guardia: "Noche", fechaInicio: "2024-12-08", totalDias: 7, kgTal: 1.02, avanceEjec: 47.1, promEficienciaVol: "101%", promFA: 18.87, avanceProgramado: 55, avancePorcentaje: "86%", ordenMes: 12, anual: 2024, mesContable: "diciembre" },
  { semana: "S4", mes: "diciembre", mesCorto: "Dec", guardia: "Día", fechaInicio: "2024-12-15", totalDias: 9, kgTal: 1.11, avanceEjec: 64.6, promEficienciaVol: "94%", promFA: 22.13, avanceProgramado: 71, avancePorcentaje: "91%", ordenMes: 12, anual: 2024, mesContable: "diciembre" },
  { semana: "S4", mes: "diciembre", mesCorto: "Dec", guardia: "Noche", fechaInicio: "2024-12-15", totalDias: 9, kgTal: 0.70, avanceEjec: 36.9, promEficienciaVol: "98%", promFA: 15.76, avanceProgramado: 71, avancePorcentaje: "52%", ordenMes: 12, anual: 2024, mesContable: "diciembre" },
  { semana: "S1", mes: "enero", mesCorto: "Jan", guardia: "Día", fechaInicio: "2024-12-24", totalDias: 8, kgTal: 0.90, avanceEjec: 45.9, promEficienciaVol: "91%", promFA: 17.78, avanceProgramado: 38, avancePorcentaje: "122%", ordenMes: 1, anual: 2025, mesContable: "enero" },
  { semana: "S1", mes: "enero", mesCorto: "Jan", guardia: "Noche", fechaInicio: "2024-12-24", totalDias: 8, kgTal: 0.70, avanceEjec: 37.3, promEficienciaVol: "90%", promFA: 16.00, avanceProgramado: 38, avancePorcentaje: "99%", ordenMes: 1, anual: 2025, mesContable: "enero" },
  { semana: "S2", mes: "enero", mesCorto: "Jan", guardia: "Día", fechaInicio: "2025-01-01", totalDias: 7, kgTal: 0.75, avanceEjec: 21, promEficienciaVol: "97%", promFA: 19.45, avanceProgramado: 33, avancePorcentaje: "65%", ordenMes: 1, anual: 2025, mesContable: "enero" },
  { semana: "S2", mes: "enero", mesCorto: "Jan", guardia: "Noche", fechaInicio: "2025-01-01", totalDias: 7, kgTal: 0.71, avanceEjec: 29.8, promEficienciaVol: "97%", promFA: 16.58, avanceProgramado: 33, avancePorcentaje: "92%", ordenMes: 1, anual: 2025, mesContable: "enero" },
  { semana: "S3", mes: "enero", mesCorto: "Jan", guardia: "Día", fechaInicio: "2025-01-08", totalDias: 7, kgTal: 0.68, avanceEjec: 30.4, promEficienciaVol: "91%", promFA: 15.95, avanceProgramado: 33, avancePorcentaje: "94%", ordenMes: 1, anual: 2025, mesContable: "enero" },
  { semana: "S3", mes: "enero", mesCorto: "Jan", guardia: "Noche", fechaInicio: "2025-01-08", totalDias: 7, kgTal: 0.70, avanceEjec: 33.5, promEficienciaVol: "92%", promFA: 15.54, avanceProgramado: 33, avancePorcentaje: "103%", ordenMes: 1, anual: 2025, mesContable: "enero" },
  { semana: "S4", mes: "enero", mesCorto: "Jan", guardia: "Día", fechaInicio: "2025-01-15", totalDias: 9, kgTal: 0.73, avanceEjec: 42.6, promEficienciaVol: "92%", promFA: 16.17, avanceProgramado: 42, avancePorcentaje: "101%", ordenMes: 1, anual: 2025, mesContable: "enero" },
  { semana: "S4", mes: "enero", mesCorto: "Jan", guardia: "Noche", fechaInicio: "2025-01-15", totalDias: 8, kgTal: 0.72, avanceEjec: 53.6, promEficienciaVol: "93%", promFA: 15.14, avanceProgramado: 42, avancePorcentaje: "128%", ordenMes: 1, anual: 2025, mesContable: "enero" },
  { semana: "S1", mes: "febrero", mesCorto: "Feb", guardia: "Día", fechaInicio: "2025-01-24", totalDias: 5, kgTal: 0.72, avanceEjec: 19.9, promEficienciaVol: "93%", promFA: 15.89, avanceProgramado: 38, avancePorcentaje: "53%", ordenMes: 2, anual: 2025, mesContable: "febrero" },
  { semana: "S1", mes: "febrero", mesCorto: "Feb", guardia: "Noche", fechaInicio: "2025-01-24", totalDias: 5, kgTal: 0.69, avanceEjec: 19.2, promEficienciaVol: "91%", promFA: 16.83, avanceProgramado: 38, avancePorcentaje: "51%", ordenMes: 2, anual: 2025, mesContable: "febrero" },
  { semana: "S2", mes: "febrero", mesCorto: "Feb", guardia: "Día", fechaInicio: "2025-01-29", totalDias: 7, kgTal: 0.70, avanceEjec: 35.8, promEficienciaVol: "90%", promFA: 16.13, avanceProgramado: 52, avancePorcentaje: "69%", ordenMes: 2, anual: 2025, mesContable: "febrero" },
  { semana: "S2", mes: "febrero", mesCorto: "Feb", guardia: "Noche", fechaInicio: "2025-01-29", totalDias: 7, kgTal: 0.70, avanceEjec: 23.2, promEficienciaVol: "91%", promFA: 14.23, avanceProgramado: 52, avancePorcentaje: "45%", ordenMes: 2, anual: 2025, mesContable: "febrero" },
  { semana: "S3", mes: "febrero", mesCorto: "Feb", guardia: "Día", fechaInicio: "2025-02-05", totalDias: 1, kgTal: 0.70, avanceEjec: 4.7, promEficienciaVol: "94%", promFA: 16.23, avanceProgramado: 52, avancePorcentaje: "9%", ordenMes: 2, anual: 2025, mesContable: "febrero" }
];

// Helper functions para procesar datos 
export const procesarDatosParaGrafico = (datos: OperationDataItem[], tipo: "month" | "week", turno: "day" | "night" | "both", periodo?: DateRange) => {
  // Filtrar por período si está especificado
  let datosFiltrados = datos;
  if (periodo && periodo.from) {
    datosFiltrados = datos.filter(item => {
      const fecha = new Date(item.fechaInicio);
      // Verificar if periodo.to existe, si no, solo compara con from
      return fecha >= periodo.from && (periodo.to ? fecha <= periodo.to : true);
    });
  }

  // Mapear turnos a guardia
  const turnoMapping: Record<string, string> = {
    "day": "Día",
    "night": "Noche",
    "both": "all"
  };

  // Si es específico Día o Noche, filtrar
  if (turno !== "both") {
    datosFiltrados = datosFiltrados.filter(item => item.guardia === turnoMapping[turno]);
  }

  if (tipo === "month") {
    // Agrupar por mes
    const mesesOrdenados = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    const datosPorMes = mesesOrdenados.map(mes => {
      const datosMes = datosFiltrados.filter(item => item.mes.toLowerCase() === mes);
      
      if (datosMes.length === 0) return { name: mes.substring(0, 3), value1: 0, value2: 0 };
      
      // Calcular promedios o sumas según sea necesario
      if (turno === "both") {
        const datosDia = datosMes.filter(item => item.guardia === "Día");
        const datosNoche = datosMes.filter(item => item.guardia === "Noche");
        
        const avanceProgramadoDia = datosDia.reduce((sum, item) => sum + item.avanceProgramado, 0);
        const avanceProgramadoNoche = datosNoche.reduce((sum, item) => sum + item.avanceProgramado, 0);
        
        const avanceEjecDia = datosDia.reduce((sum, item) => sum + item.avanceEjec, 0);
        const avanceEjecNoche = datosNoche.reduce((sum, item) => sum + item.avanceEjec, 0);
        
        return {
          name: mes.substring(0, 3),
          value1: avanceProgramadoDia + avanceProgramadoNoche,
          value2: avanceEjecDia + avanceEjecNoche
        };
      } else {
        const avanceProgramado = datosMes.reduce((sum, item) => sum + item.avanceProgramado, 0);
        const avanceEjec = datosMes.reduce((sum, item) => sum + item.avanceEjec, 0);
        
        return {
          name: mes.substring(0, 3),
          value1: avanceProgramado,
          value2: avanceEjec
        };
      }
    });
    
    // Filtrar meses sin datos
    return datosPorMes.filter(item => item.value1 > 0 || item.value2 > 0);
  } else {
    // Procesar por semana
    // Obtener semanas únicas
    const semanasUnicas = Array.from(new Set(datosFiltrados.map(item => item.semana)));
    
    return semanasUnicas.map(semana => {
      const datosSemana = datosFiltrados.filter(item => item.semana === semana);
      
      if (turno === "both") {
        const datosDia = datosSemana.filter(item => item.guardia === "Día");
        const datosNoche = datosSemana.filter(item => item.guardia === "Noche");
        
        const avanceProgramadoDia = datosDia.reduce((sum, item) => sum + item.avanceProgramado, 0);
        const avanceProgramadoNoche = datosNoche.reduce((sum, item) => sum + item.avanceProgramado, 0);
        
        const avanceEjecDia = datosDia.reduce((sum, item) => sum + item.avanceEjec, 0);
        const avanceEjecNoche = datosNoche.reduce((sum, item) => sum + item.avanceEjec, 0);
        
        return {
          name: semana,
          value1: avanceProgramadoDia + avanceProgramadoNoche,
          value2: avanceEjecDia + avanceEjecNoche
        };
      } else {
        const avanceProgramado = datosSemana.reduce((sum, item) => sum + item.avanceProgramado, 0);
        const avanceEjec = datosSemana.reduce((sum, item) => sum + item.avanceEjec, 0);
        
        return {
          name: semana,
          value1: avanceProgramado,
          value2: avanceEjec
        };
      }
    });
  }
};

// Obtener KPIs
export const obtenerKPIs = (datos: OperationDataItem[], turno: "day" | "night" | "both", periodo?: DateRange) => {
  // Filtrar por período si está especificado
  let datosFiltrados = datos;
  if (periodo && periodo.from) {
    datosFiltrados = datos.filter(item => {
      const fecha = new Date(item.fechaInicio);
      // Verificar if periodo.to existe, si no, solo compara con from
      return fecha >= periodo.from && (periodo.to ? fecha <= periodo.to : true);
    });
  }

  // Verificar que hay datos después del filtro
  if (datosFiltrados.length === 0) {
    return {
      totalProgrammed: "0K",
      efficiencyVol: "0%",
      executed: "0K",
      compliance: "0%",
      kgTal: "0",
      fAdvance: "0%",
    };
  }

  // Mapear turnos a guardia
  const turnoMapping: Record<string, string> = {
    "day": "Día",
    "night": "Noche",
    "both": "all"
  };

  // Si es específico Día o Noche, filtrar
  if (turno !== "both") {
    datosFiltrados = datosFiltrados.filter(item => item.guardia === turnoMapping[turno]);
  }

  // Calcular KPIs
  const totalProgramado = datosFiltrados.reduce((sum, item) => sum + item.avanceProgramado, 0);
  const ejecutado = datosFiltrados.reduce((sum, item) => sum + item.avanceEjec, 0);
  
  // Eficiencia de volumen (promedio)
  const eficienciaVol = datosFiltrados.reduce((sum, item) => {
    const valor = parseInt(item.promEficienciaVol.replace('%', ''));
    return sum + valor;
  }, 0) / datosFiltrados.length;
  
  // Cumplimiento (ejecutado/programado)
  const cumplimiento = (ejecutado / totalProgramado) * 100;
  
  // Kg/Tal (promedio)
  const kgTal = datosFiltrados.reduce((sum, item) => sum + item.kgTal, 0) / datosFiltrados.length;
  
  // Factor Avance (promedio)
  const fAvance = datosFiltrados.reduce((sum, item) => sum + item.promFA, 0) / datosFiltrados.length;
  
  return {
    totalProgrammed: (totalProgramado / 1000).toFixed(1) + 'K',
    efficiencyVol: eficienciaVol.toFixed(1) + '%',
    executed: (ejecutado / 1000).toFixed(1) + 'K',
    compliance: cumplimiento.toFixed(1) + '%',
    kgTal: kgTal.toFixed(1),
    fAdvance: fAvance.toFixed(1) + '%',
  };
};
