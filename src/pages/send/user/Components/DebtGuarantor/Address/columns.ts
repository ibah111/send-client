import { Address } from '@contact/models';
import { GridColumns } from '@mui/x-data-grid-premium';
import { t } from 'i18next';
export default function getColumns() {
  const columns: GridColumns<Address> = [
    {
      field: 'id',
      headerName: t('form.address.id'),
      type: 'number',
    },
    {
      field: 'typ',
      headerName: t('form.address.typ'),
      valueGetter: (params) => params.row.TypDict?.name,
    },
    { field: 'full_adr', headerName: t('form.address.full_adr') },
  ];
  return columns;
}
