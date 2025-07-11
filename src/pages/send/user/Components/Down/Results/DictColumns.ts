import { GridColDef } from '@mui/x-data-grid-premium';

export const DictColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Наименование', width: 300 },
  { field: 'code', headerName: 'Код', width: 100 },
];
