import { Portfolio } from '@contact/models';
import { GridColDef } from '@mui/x-data-grid-premium';

export default function PortfolioToRequisitesColumns() {
  const columns: GridColDef<Portfolio>[] = [
    {
      headerName: 'ID',
      field: 'id',
    },
    {
      headerName: 'Наименование',
      field: 'name',
    },
    {
      headerName: 'Дата подписания',
      field: 'sign_date',
    },
    {
      headerName: 'ID банка',
      type: 'number',
      field: 'bank.id',
      valueGetter(params) {
        return params.row.Bank?.id;
      },
    },
    {
      headerName: 'Наименование банка',
      type: 'string',
      field: 'bank.name',
      valueGetter(params) {
        return params.row.Bank?.name;
      },
    },
    {
      width: 150,
      headerName: 'Полное наименование банка',
      type: 'string',
      field: 'bank.full_name',
      valueGetter(params) {
        return params.row.Bank?.full_name;
      },
    },
  ];
  return columns;
}
