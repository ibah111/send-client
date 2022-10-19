import { DocAttach, User } from '@contact/models';
import { GridColumns, GridValueGetterParams } from '@mui/x-data-grid-premium';
import { t } from 'i18next';
import { generateName } from '../../../../../../../utils/generateName';
import Actions from './Actions';

export default function getColumns() {
  const columns: GridColumns<DocAttach> = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: t('form.documents.table.name'),
    },
    {
      field: 'dt',
      headerName: t('form.documents.table.dt'),
      type: 'date',
      valueGetter: (params) => new Date(params.value),
    },
    {
      field: 'User',
      headerName: t('form.documents.table.user'),
      valueGetter: (params: GridValueGetterParams<User, DocAttach>) =>
        generateName(params.value?.f, params.value?.i, params.value?.o),
    },
    {
      field: 'actions',
      headerName: t('form.documents.table.actions.name'),
      getActions: (params) => [<Actions key={1} id={params.row.id} />],
    },
  ];
  return columns;
}
