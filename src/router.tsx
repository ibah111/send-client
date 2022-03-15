import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import crack from "./utils/crack";
import SliderData from "./providers/SliderData";
import { Grid } from "@mui/material";
import getRoutes from "./utils/getRoutes";
import NotFound from "./components/NotFound";
const Menu = React.lazy(() => import("./components/Menu"));
const routes = getRoutes();
const newTimeout = 500;
export default function Home() {
  const location = useLocation();
  const [current, setCurrent] = React.useState("/");
  const [stopMenu, setStopMenu] = React.useState(false);
  const [alwaysMenu, setAlwaysMenu] = React.useState(false);
  const [timeout, setTime] = React.useState(0);
  const [minApp, setMin] = React.useState(false);
  React.useEffect(() => {
    crack();
  }, []);
  React.useEffect(() => {
    setMin(false);
    if (location.pathname === "/") {
      setStopMenu(true);
    } else {
      setStopMenu(false);
    }
    setTimeout(() => {
      if (location.pathname === "/") {
        setAlwaysMenu(false);
      } else {
        setAlwaysMenu(true);
      }
      setMin(true);
      setCurrent(location.pathname);
    }, timeout);
  }, [location.pathname]);
  React.useEffect(() => {
    if (timeout !== newTimeout && minApp) {
      setTimeout(() => setTime(newTimeout), 20);
    }
  }, [minApp]);
  return (
    <>
      <SliderData.Provider
        value={{
          minApp,
          setMin,
          realLocation: location.pathname,
          timeout,
          setTime,
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <React.Suspense fallback={<>...</>}>
            <Menu stop={stopMenu} always={alwaysMenu} />
          </React.Suspense>
          <React.Suspense fallback={<>...</>}></React.Suspense>
          <Routes location={current}>
            {routes.map((route: any, index: any) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <React.Suspense fallback={<>...</>}>
                    <route.Element />
                  </React.Suspense>
                }
              >
                {route.childrens.map((children: any, index: any) => (
                  <Route
                    key={index}
                    path={children.path}
                    element={
                      <React.Suspense fallback={<>...</>}>
                        <children.Element />
                      </React.Suspense>
                    }
                  />
                ))}
              </Route>
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Grid>
      </SliderData.Provider>
    </>
  );
}
