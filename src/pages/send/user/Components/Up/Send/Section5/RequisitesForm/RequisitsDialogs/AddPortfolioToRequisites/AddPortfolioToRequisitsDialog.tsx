import { Portfolio } from '@contact/models';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import React from 'react';
import getAllLinksByRequisites from '../../../../../../../../../../api/PortfoliosToRequisites/getAllLinksByRequisites';
import PortfolioToRequisitesColumns from './PortfolioToRequisitesColumns';

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
