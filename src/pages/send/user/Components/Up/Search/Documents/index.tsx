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
import { useAppSelector } from '../../../../../../../Reducer';
import DocumentsTable from './DocumentsTable';
export default function Documents() {
  const id = useAppSelector((state) => state.Send.id);
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Grid item>
        <Button disabled={Boolean(!id)} onClick={handleOpen}>
          {t('form.search.documents')}
        </Button>
      </Grid>
      <Dialog open={open} fullWidth maxWidth={'xl'} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>
          {t('form.documents.title')}
        </DialogTitle>
        <DialogContent>
          <DocumentsTable />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('form.documents.close')}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
