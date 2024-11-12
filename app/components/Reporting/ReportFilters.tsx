"use client";
import { useState } from 'react';

interface ReportFiltersProps {
    onFilterChange: (filters: { dateRange: DateRange; project: string }) => void;
  }
  
  const ReportFilters: React.FC<ReportFiltersProps> = ({ onFilterChange }) => {
    const [dateRange, setDateRange] = useState<DateRange>({ start: '', end: '' });
    const [project, setProject] = useState<string>('');
  
    const handleApplyFilters = () => {
      onFilterChange({ dateRange, project });
    };
  
    return (
      <div>
        <input
          type="date"
          value={dateRange.start}
          onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
        />
        <input
          type="date"
          value={dateRange.end}
          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
        />
        <select value={project} onChange={(e) => setProject(e.target.value)}>
          <option value="">Selecciona un proyecto</option>
          {/* Opciones de proyectos */}
        </select>
        <button onClick={handleApplyFilters}>Aplicar Filtros</button>
      </div>
    );
  };
  
  export default ReportFilters;

  