import React, { useContext } from "react";
import NotLoged from "./NotLoged";
import PropTypes from "prop-types";
import server from "../utils/server";
import axios from "axios";
import User from "../providers/User";
import { getToken } from "../utils/getToken";
const connect = async (
  token: string,
  callback: (value: boolean) => void,
  setToken: (value: string) => void
) => {
  const response = await axios({
    method: "POST",
    url: server() + "/login",
    data: { token },
  });
  if (response.data === "Ok") {
    callback(true);
    setToken(token);
  }
};
export default function Connect({ children }: any) {
  const [loged, setLoged] = React.useState(false);
  const { setToken } = React.useContext(User);
  React.useEffect(() => {
    const token = getToken();
    connect(token.token, setLoged, setToken);
  }, []);
  return <>{loged ? children : <NotLoged />}</>;
}
Connect.propTypes = {
  children: PropTypes.node,
};
