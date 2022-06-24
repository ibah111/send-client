import React from "react";
import NotConnected from "./NotConnected";
import PropTypes from "prop-types";
import { io } from "socket.io-client";
import server from "../utils/server";
import getVersion from "../utils/getVersion";
const connect = (callback: (value: boolean) => void) => {
  const socket = io(server("ws"));
  socket.on("connect", () => {
    socket.emit("version", getVersion());
    callback(true);
  });
  socket.on("new_version", () => {
    document.location.reload();
  });
  socket.on("disconnect", () => {
    callback(false);
  });
};
export default function Connect({ children }: any) {
  const [connected, setConnected] = React.useState(false);
  React.useEffect(() => {
    connect(setConnected);
  }, []);
  return <>{connected ? children : <NotConnected />}</>;
}
Connect.propTypes = {
  children: PropTypes.node,
};
