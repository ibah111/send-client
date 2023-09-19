import './locale';
import React from 'react';
import Router from './router';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterLuxon } from '@mui/x-date-pickers-pro/AdapterLuxon';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './components/Login';
import { Connect } from './components/Connect';
import { Provider } from 'react-redux';
import store, { RootReducerContext } from './Reducer';
import version from './utils/version';
import ErrorHandler from './components/ErrorHandler';
import { SnackbarProvider } from 'notistack';
import { HealthProvider } from '@tools/health-status-react-component';
import server from './utils/server';
const url = server();
export default function Document() {
  return (
    <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterLuxon}>
      <Provider context={RootReducerContext} store={store}>
        <SnackbarProvider maxSnack={11}>
          <ErrorHandler />
          <Connect>
            <HealthProvider url={url} position="left" top={80}>
              <Login>
                <BrowserRouter basename={version.root}>
                  <Router />
                </BrowserRouter>
              </Login>
            </HealthProvider>
          </Connect>
        </SnackbarProvider>
      </Provider>
    </LocalizationProvider>
  );
}
