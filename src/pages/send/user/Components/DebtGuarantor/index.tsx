import { Dialog, ThemeProvider, useTheme } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import Form from './Form';
import store, { DgReducerContext } from './Reducer';
import { createTheme } from './theme';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterLuxon } from '@mui/x-date-pickers-pro/AdapterLuxon';

interface DebtGuarantorFormProps {
  id?: number;
  open?: boolean;
  parent_id?: number | null;
  onClose: (id?: number) => void;
}
export default function DebtGuarantorForm({
  id,
  open,
  parent_id,
  onClose,
}: DebtGuarantorFormProps) {
  const oldTheme = useTheme();
  const theme = React.useMemo(() => createTheme(oldTheme), [oldTheme]);
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterLuxon}>
        <Provider context={DgReducerContext} store={store}>
          <Dialog
            fullWidth
            maxWidth="lg"
            open={open || false}
            onClose={() => onClose()}
          >
            <Form id={id} parent_id={parent_id} onClose={onClose} />
          </Dialog>
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
