import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import crack from './utils/crack';
import { useAppDispatch, useAppSelector } from './Reducer';
import { Grid } from '@mui/material';
import getRoutes from './utils/getRoutes';
import NotFound from './components/NotFound';
import { setLocation, setTime, setApp } from './Reducer/App';
const Menu = React.lazy(() => import('./components/Menu'));
const routes = getRoutes();
const newTimeout = 500;
export default function Home() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [current, setCurrent] = React.useState('/');
  const [stopMenu, setStopMenu] = React.useState(false);
  const [alwaysMenu, setAlwaysMenu] = React.useState(false);
  const minApp = useAppSelector((state) => state.App.minApp);
  const timeout = useAppSelector((state) => state.App.timeout);
  React.useEffect(() => {
    crack();
  }, []);
  React.useEffect(() => {
    dispatch(setLocation(location.pathname));
    dispatch(setApp(false));
    if (location.pathname === '/') {
      setStopMenu(true);
    } else {
      setStopMenu(false);
    }
    setTimeout(() => {
      if (location.pathname === '/') {
        setAlwaysMenu(false);
      } else {
        setAlwaysMenu(true);
      }
      dispatch(setApp(true));
      setCurrent(location.pathname);
    }, timeout);
  }, [location.pathname]);
  React.useEffect(() => {
    if (timeout !== newTimeout && minApp) {
      setTimeout(() => dispatch(setTime(newTimeout)), 20);
    }
  }, [minApp]);
  return (
    <>
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
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <React.Suspense fallback={<>...</>}>
                  <route.Element />
                </React.Suspense>
              }
            >
              {route.childrens?.map((children, index) => (
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
    </>
  );
}
