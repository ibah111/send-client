import { Dialog, DialogTitle, DialogContent, Grid } from '@mui/material';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import RequisitsColumns from './RequisitesColumn';
import React from 'react';
import { BankRequisitesClass } from '../../../../../../../../api/BankRequisites/BankRequisitesInput';
import getAllBankRequisites from '../../../../../../../../api/BankRequisites/getAllBankRequisites';
import RequisitsToolbar from './RequisitesToolbar';
import useRequisitesDialog from './RequisitesHooks/useAddPortfolioToRequsites';

export enum SectionFiveEvents {
  openRequisitesDialog = 'openRequisitesDialog',
  openRequisitesAddDialog = 'openRequisitesAddDialog',
  openRequisitesEditDialog = 'openRequisitesEditDialog',
  openRequisitesAddPortfoliosToRequisitesDialog = 'openRequisitesAddPortfoliosToRequisitesDialog',
}

export class SectionFiveEventDialog<
  Value = number | string | object | undefined,
> extends Event {
  constructor(type: SectionFiveEvents, value: Value) {
    super(type);
    this.value = value;
  }
  value: Value;
}

interface TableDialog {
  open: boolean;
  onClose: () => void;
}

export default function RequisitesTableDialog({ open, onClose }: TableDialog) {
  const [rows, setRows] = React.useState<BankRequisitesClass[]>([]);
  const DialogTarget = React.useMemo(() => new EventTarget(), []);
  const columns = RequisitsColumns({
    DialogTarget,
  });
  const callback = React.useCallback(
    () =>
      getAllBankRequisites().subscribe((result) => {
        setRows(result);
      }),
    [],
  );

  React.useEffect(() => {
    callback();
  }, [callback]);

  const requisitesDialogControl = useRequisitesDialog({
    DialogTarget,
    onClose: () => callback(),
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={'xl'}
      sx={{ width: '100%', height: '100%' }}
    >
      <DialogTitle>{`Реквизиты`}</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs>
            <DataGridPremium
              columns={columns}
              rows={rows}
              slots={{
                toolbar: RequisitsToolbar,
              }}
            />
          </Grid>
        </Grid>
        {}
        {}
      </DialogContent>
    </Dialog>
  );
}
