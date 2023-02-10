import './locale';
import React from 'react';
import Router from './router';
import moment from 'moment';
import 'moment/locale/ru';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './components/Login';
import { Connect } from './components/Connect';
import { Provider } from 'react-redux';
import store, { RootReducerContext } from './Reducer';
import version from './utils/version';
import { tz } from 'moment-timezone';
import ErrorHandler from './components/ErrorHandler';
import { SnackbarProvider } from 'notistack';
import { HealthProvider } from '@tools/health-status-react-component';
import server from './utils/server';
import 'moment-timezone';
const url = server();
moment.tz.setDefault('GMT');
moment.locale('ru');
export default function Document() {
  return (
    <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterMoment}>
      <Provider context={RootReducerContext} store={store}>
        <SnackbarProvider maxSnack={11}>
          <ErrorHandler />
          <Connect>
            <HealthProvider url={url} top={40}>
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
