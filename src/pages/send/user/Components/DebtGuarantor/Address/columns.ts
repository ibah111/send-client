import { Address } from '@contact/models';
import { GridColumns } from '@mui/x-data-grid-premium';

export default function getColumns() {
  const columns: GridColumns<Address> = [
    {
      field: 'id',
      headerName: 'ID',
      type: 'number',
    },
    {
      field: 'typ',
      headerName: 'Тип',
      valueGetter: (params) => params.row.TypDict?.name,
    },
    { field: 'full_adr', headerName: 'Адрес' },
  ];
  return columns;
}
