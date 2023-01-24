import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
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
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
