import { Portfolio } from '@contact/models';
import { IconButton, Tooltip } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid-premium';
import DeleteIcon from '@mui/icons-material/Delete';
import DeletePortfolioToRequisitesLink from '../../../../../../../../../../api/PortfoliosToRequisites/DeletePortfolioToRequisitesLink';
import moment from 'moment';

interface PortfolioToRequisitesColumnsProps {
  id: number;
}

export default function PortfolioToRequisitesColumns({
  id: r_requisites_id,
}: PortfolioToRequisitesColumnsProps) {
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
      type: 'date',
      valueGetter(params) {
        return moment(params.row.sign_date).toDate();
      },
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
    {
      headerName: 'Действия',
      field: 'actions',
      type: 'actions',
      getActions: (params) => [
        <Tooltip title={'Удалить связь'}>
          <IconButton
            color="error"
            onClick={() => {
              const r_portfolio_id = params.row.id;
              DeletePortfolioToRequisitesLink({
                r_portfolio_id,
                r_requisites_id,
              });
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>,
      ],
    },
  ];
  return columns;
}
