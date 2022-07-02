import "./locale";
import React from "react";
import Router from "./router";
import moment from "moment";
import "moment/locale/ru";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Connect from "./components/Connect";
import { Provider } from "react-redux";
import store from "./Reducer";
import version from "./utils/version";
import { tz } from "moment-timezone";
export default function Document() {
  React.useEffect(() => {
    tz.setDefault("GMT");

    moment.locale("ru");
  }, []);
  return (
    <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterMoment}>
      <Provider store={store}>
        <Connect>
          <Login>
            <BrowserRouter basename={version.root}>
              <Router />
            </BrowserRouter>
          </Login>
        </Connect>
      </Provider>
    </LocalizationProvider>
  );
}
