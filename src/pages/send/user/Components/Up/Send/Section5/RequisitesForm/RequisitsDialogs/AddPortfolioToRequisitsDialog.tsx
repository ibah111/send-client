import { Portfolio } from '@contact/models';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { DataGridPremium, GridColDef } from '@mui/x-data-grid-premium';
import React from 'react';
import getAllLinksByRequisites from '../../../../../../../../../api/PortfoliosToRequisites/getAllLinksByRequisites';

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
    getAllLinksByRequisites(id).subscribe((result) => setRows(result));
  }, [id, rows]);
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DataGridPremium columns={columns} rows={rows} />
        </DialogContent>
      </Dialog>
    </>
  );
}

function PortfolioToRequisitesColumns() {
  const columns: GridColDef<Portfolio>[] = [
    {
      field: 'id',
    },
    {
      field: 'name',
    },
    {
      field: 'sign_date',
    },
    {
      type: 'number',
      field: 'bank.id',
      valueGetter(params) {
        return params.row.Bank?.id;
      },
    },
    {
      type: 'string',
      field: 'bank.name',
      valueGetter(params) {
        return params.row.Bank?.name;
      },
    },
    {
      type: 'string',
      field: 'bank.full_name',
      valueGetter(params) {
        return params.row.Bank?.full_name;
      },
    },
  ];
  return columns;
}
