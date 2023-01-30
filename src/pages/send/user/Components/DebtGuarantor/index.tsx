import { Dialog, ThemeProvider, useTheme } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import Form from './Form';
import store, { DgReducerContext } from './Reducer';
import { createTheme } from './theme';

export default function DebtGuarantorForm() {
  const oldTheme = useTheme();
  const theme = React.useMemo(() => createTheme(oldTheme), [oldTheme]);
  return (
    <ThemeProvider theme={theme}>
      <Provider context={DgReducerContext} store={store}>
        <Dialog fullWidth maxWidth="lg" open={true}>
          <Form />
        </Dialog>
      </Provider>
    </ThemeProvider>
  );
}
