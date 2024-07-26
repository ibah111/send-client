import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import React from 'react';

interface DialogProps {
  open: boolean;
  id: number;
  onClose: () => void;
}

export default function AddPortfolioToRequisits({
  id,
  onClose,
  open,
}: DialogProps) {
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {});
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DataGridPremium columns={[]} rows={rows} />
        </DialogContent>
      </Dialog>
    </>
  );
}
