import { Dialog, ThemeProvider, useTheme } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import Form from './Form';
import store, { DgReducerContext } from './Reducer';
import { createTheme } from './theme';

interface DebtGuarantorFormProps {
  id?: number;
  open?: boolean;
  onClose: () => void;
}
export default function DebtGuarantorForm({
  id,
  open,
  onClose,
}: DebtGuarantorFormProps) {
  const oldTheme = useTheme();
  const theme = React.useMemo(() => createTheme(oldTheme), [oldTheme]);
  return (
    <ThemeProvider theme={theme}>
      <Provider context={DgReducerContext} store={store}>
        <Dialog fullWidth maxWidth="lg" open={open || false} onClose={onClose}>
          <Form id={id} />
        </Dialog>
      </Provider>
    </ThemeProvider>
  );
}
