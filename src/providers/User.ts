import React from "react";
export default React.createContext<{
  token: string;
  setToken: (value: string) => void;
}>({
  token: "",
  setToken: (value: string) => {},
});
