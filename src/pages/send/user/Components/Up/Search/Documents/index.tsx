import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LawExecDocumentsTable from './LawExecDocumentsTable';
import LawActDocumentsTable from './LawActDocumentsTable';
interface DocumentsProps {
  law_act_id: number;
  law_exec_id: number;
}
export default function Documents({ law_exec_id, law_act_id }: DocumentsProps) {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);
  const handleOpen = React.useCallback(() => {
    setOpen(true);
  }, []);
  return (
    <>
      <Grid item>
        <Button
          //disabled={Boolean(!id)}
          onClick={handleOpen}
        >
          {t('form.search.documents')}
        </Button>
      </Grid>
      <Dialog open={open} fullWidth maxWidth={'xl'} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>
          {t('form.documents.title')}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <LawExecDocumentsTable law_exec_id={law_exec_id} />
            </Grid>
            <Grid item xs={6}>
              <LawActDocumentsTable law_act_id={law_act_id} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('form.documents.close')}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
