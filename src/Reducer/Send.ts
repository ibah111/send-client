import moment, { MomentInput } from "moment";
import { createSlice, Draft } from "@reduxjs/toolkit";
import getName from "../utils/getName";
export type DataTypes = {
  fio: null | string;
  contract: null | string;
  total_sum: null | number;
  load_dt: null | MomentInput;
  court_doc_num: null | string;
  executive_typ: null | number;
  court_date: null | MomentInput;
  DELIVERY_TYP: null | number;
  entry_force_dt: null | MomentInput;
  template_typ: null | number;
  receipt_recover_dt: null | MomentInput;
  fssp_date: null | MomentInput;
  r_court_id: null | number;
  dsc: null | string;
};
type ValueOf<T> = T[keyof T];
export type TypesData = ValueOf<DataTypes>;
export type DataNames = keyof DataTypes;
export const initState: DataTypes = {
  fio: null,
  contract: null,
  total_sum: null,
  load_dt: null,
  court_doc_num: null,
  executive_typ: null,
  court_date: null,
  DELIVERY_TYP: null,
  entry_force_dt: null,
  receipt_recover_dt: null,
  template_typ: null,
  fssp_date: null,
  r_court_id: null,
  dsc: null,
};
export const send = createSlice({
  name: "send",
  initialState: { id: null, ...initState },
  reducers: {
    setSend: (state, action) => {
      const data = action.payload;
      state.fio = getName([data.Person.f, data.Person.i, data.Person.o]);
      state.contract = data.Debt.contract;
      state.load_dt = moment().toISOString();
      state.total_sum = data.total_sum;
      state.court_doc_num = data.court_doc_num;
      state.executive_typ = data.executive_typ;
      state.court_date = data.court_date;
      state.DELIVERY_TYP = 1;
      state.template_typ = 16;
      state.entry_force_dt = data.entry_force_dt;
      state.receipt_recover_dt = data.receipt_recover_dt;
      state.fssp_date = moment().toISOString();
      state.r_court_id = data.r_court_id;
      state.dsc = data.dsc;
    },
    setData<K extends DataNames>(
      state: Draft<DataTypes>,
      action: { payload: [K, DataTypes[K]] }
    ) {
      state[action.payload[0]] = action.payload[1];
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    reset: (state) => {
      return { id: state.id, ...initState };
    },
  },
});
export const { setData, setSend, reset, setId } = send.actions;
export default send.reducer;
