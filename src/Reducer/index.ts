import { configureStore } from '@reduxjs/toolkit';
import {
  createDispatchHook,
  TypedUseSelectorHook,
  createSelectorHook,
} from 'react-redux';
import User from './User';
import App from './App';
import Search from './Search';
import Send from './Send';
import Results from './Results';
import Error from './Error';
import Comment from './Comment';
import StateResults from './StateResults';
import Message from './Message';
import LawExec from './LawExec';
import React from 'react';
const store = configureStore({
  reducer: {
    User,
    App,
    Search,
    Send,
    Results,
    Error,
    Comment,
    StateResults,
    Message,
    LawExec,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const RootReducerContext = React.createContext(null as any);
export const useAppDispatch: () => AppDispatch =
  createDispatchHook(RootReducerContext);

export const useAppSelector: TypedUseSelectorHook<RootState> =
  createSelectorHook(RootReducerContext);
export default store;
