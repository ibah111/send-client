import { Portfolio } from '@contact/models';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { DataGridPremium, GridColDef } from '@mui/x-data-grid-premium';
import React from 'react';
import getAllLinksByRequisites from '../../../../../../../../../../api/PortfoliosToRequisites/getAllLinksByRequisites';

interface DialogProps {
  open: boolean;
  id: number;
  onClose: () => void;
}

export default function PortfoliosToRequisits({
  id,
  onClose,
  open,
}: DialogProps) {
  const [rows, setRows] = React.useState<Portfolio[]>([]);
  const columns = PortfolioToRequisitesColumns();
  React.useEffect(() => {
    if (id > 0) {
      getAllLinksByRequisites(id).subscribe((result) => setRows(result));
    }
  }, [id]);
  /**
   @todo
   * 
   */
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth={'xl'}
        sx={{ width: '100%', height: '100%' }}
      >
        <DialogTitle>{`Привязанные портфели к реквизиту`}</DialogTitle>
        <DialogContent>
          <DataGridPremium columns={columns} rows={rows} autoHeight />
        </DialogContent>
      </Dialog>
    </>
  );
}

function PortfolioToRequisitesColumns() {
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
