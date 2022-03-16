
import "./locale";
import React from "react";
import Router from "./router";
import moment from "moment";
import "moment/locale/ru";
import { LocalizationProvider } from "@mui/lab";
import AdapterMoment from "@mui/lab/AdapterMoment";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Connect from "./components/Connect";
import { Provider } from "react-redux";
import store from "./Reducer";
export default function Document() {
  const [token, setToken] = React.useState("");
  const [depart, setDepart] = React.useState(0);
  const [month, setMonth] = React.useState(moment().format("MM.YYYY"));
  const context = { token, setToken, depart, setDepart, month, setMonth };
  React.useEffect(() => {
    moment.locale("ru");
  }, []);
  return (
    <LocalizationProvider locale="ru" dateAdapter={AdapterMoment}>
      <Provider store={store}>
        <Connect>
          <Login>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Login>
        </Connect>
      </Provider>
    </LocalizationProvider>
  );
}
