import User from "./providers/User";
import React from "react";
import Router from "./router";
import moment from "moment";
import "moment/locale/ru";
import { LocalizationProvider } from "@mui/lab";
import AdapterMoment from "@mui/lab/AdapterMoment";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Connect from "./components/Connect";
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
      <User.Provider value={context}>
        <Connect>
          <Login>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Login>
        </Connect>
      </User.Provider>
    </LocalizationProvider>
  );
}
