"use client";
import { useState } from "react";
import ReportFilters from "./ReportFilters";
import ReportChart from "./ReportChart";
import ExportButtons from "./ExportButtons";

const ReportPage: React.FC = () => {
    // Datos iniciales para simular el ejemplo
    const initialReportData: ReportData = {
      treesPlantedPerMonth: [100, 150, 200],
      fundsRaised: [500, 750, 1000],
      months: ['Enero', 'Febrero', 'Marzo'],
    };
  
    const initialTreeData: TreeData[] = [
      { project: 'Proyecto A', treesPlanted: 100, fundsRaised: 500, date: '2024-01-15' },
      { project: 'Proyecto B', treesPlanted: 150, fundsRaised: 750, date: '2024-02-10' },
      { project: 'Proyecto A', treesPlanted: 200, fundsRaised: 1000, date: '2024-03-05' },
    ];
  
    const [reportData, setReportData] = useState<ReportData>(initialReportData);
    const [treeData, setTreeData] = useState<TreeData[]>(initialTreeData);
  
    const handleFilterChange = (filters: { dateRange: DateRange; project: string }) => {
      const { dateRange, project } = filters;
  
      // Filtrar `treeData` basado en rango de fechas y proyecto
      const filteredTreeData = initialTreeData.filter((item) => {
        const itemDate = new Date(item.date);
        const startDate = dateRange.start ? new Date(dateRange.start) : null;
        const endDate = dateRange.end ? new Date(dateRange.end) : null;
  
        const isInDateRange = (!startDate || itemDate >= startDate) && (!endDate || itemDate <= endDate);
        const isInProject = project ? item.project === project : true;
  
        return isInDateRange && isInProject;
      });
  
      // Filtrar `reportData` para actualizar los datos por mes según los datos filtrados
      const filteredReportData: ReportData = {
        treesPlantedPerMonth: [0, 0, 0], // Reiniciar los contadores
        fundsRaised: [0, 0, 0],
        months: initialReportData.months,
      };
  
      filteredTreeData.forEach((item) => {
        const monthIndex = new Date(item.date).getMonth(); // Usar el mes de la fecha para el índice (0 = Enero, 1 = Febrero, ...)
        if (monthIndex >= 0 && monthIndex < filteredReportData.treesPlantedPerMonth.length) {
          filteredReportData.treesPlantedPerMonth[monthIndex] += item.treesPlanted;
          filteredReportData.fundsRaised[monthIndex] += item.fundsRaised;
        }
      });
  
      // Actualizar el estado con los datos filtrados
      setTreeData(filteredTreeData);
      setReportData(filteredReportData);
    };
  
    return (
      <div>
        <ReportFilters onFilterChange={handleFilterChange} />
        <ReportChart data={reportData} />
        <ExportButtons data={treeData} />
      </div>
    );
  };
  
  export default ReportPage;
  