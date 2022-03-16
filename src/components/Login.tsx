import React from "react";
import NotLoged from "./NotLoged";
import PropTypes from "prop-types";
import server from "../utils/server";
import axios from "axios";
import { setToken } from "../Reducer/User";
import { getToken } from "../utils/getToken";
import { useDispatch } from "react-redux";
const connect = async (
  token: string,
  callback: (value: boolean) => void,
  setToken: (value: any) => void
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
  const dispatch = useDispatch();
  const [loged, setLoged] = React.useState(false);
  React.useEffect(() => {
    const token = getToken();
    connect(token.token, setLoged, (token) => dispatch(setToken(token)));
  }, []);
  return <>{loged ? children : <NotLoged />}</>;
}
Connect.propTypes = {
  children: PropTypes.node,
};
