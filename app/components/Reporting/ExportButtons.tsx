import React from 'react';
import { exportPDF } from './exports';
import { exportCSV } from './exports';

interface ExportButtonsProps {
  data: TreeData[];
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ data }) => (
  <div>
    <button onClick={() => exportPDF(data)}>Exportar a PDF</button>
    <button onClick={() => exportCSV(data)}>Exportar a CSV</button>
  </div>
);

export default ExportButtons;
