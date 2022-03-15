import React from "react";
export default React.createContext({
  minApp: false,
  setMin: (value: boolean) => {},
  realLocation: "/",
  timeout: 0,
  setTime: (value: number) => {},
});
