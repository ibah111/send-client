import { DebtGuarantor } from '@contact/models';
import {
  configureStore,
  createSlice,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit';
import { CreationAttributes } from '@sql-tools/sequelize';
import React from 'react';
import {
  createDispatchHook,
  createSelectorHook,
  TypedUseSelectorHook,
} from 'react-redux';
export type TypeDebtGuarantor = CreationAttributes<DebtGuarantor>;
const initialState = {} as TypeDebtGuarantor;
const DebtGuarantorSlice = createSlice({
  name: 'DebtGuarantor',
  initialState,
  reducers: {
    setDebtGuarantor: (state, action: PayloadAction<DebtGuarantor>) =>
      action.payload,
    setDebtGuarantorValue<T extends keyof TypeDebtGuarantor>(
      state: Draft<TypeDebtGuarantor>,
      action: PayloadAction<[T, TypeDebtGuarantor[T]]>,
    ) {
      state[action.payload[0]] = action.payload[1];
      return state;
    },
    resetDebtGuarantor() {
      return initialState;
    },
  },
});
export const { setDebtGuarantor, setDebtGuarantorValue, resetDebtGuarantor } =
  DebtGuarantorSlice.actions;
const store = configureStore({
  reducer: { DebtGuarantor: DebtGuarantorSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export type DgState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const DgReducerContext = React.createContext(null as any);
export const useDgDispatch: () => AppDispatch =
  createDispatchHook(DgReducerContext);

export const useDgSelector: TypedUseSelectorHook<DgState> =
  createSelectorHook(DgReducerContext);
export default store;
