import moment from "moment";
import { createSlice } from "@reduxjs/toolkit";
import getName from "../utils/getName";
export type Types = null | number | string;
export type Names =
  | "fio"
  | "contract"
  | "total_sum"
  | "load_dt"
  | "court_doc_num"
  | "executive_typ"
  | "court_date"
  | "DELIVERY_TYP"
  | "entry_force_dt"
  | "template_typ"
  | "receipt_recover_dt"
  | "fssp_date"
  | "r_court_id"
  | "dsc";
export type DataTypes = {
  fio: Types;
  contract: Types;
  total_sum: Types;
  load_dt: Types;
  court_doc_num: Types;
  executive_typ: Types;
  court_date: Types;
  DELIVERY_TYP: Types;
  entry_force_dt: Types;
  template_typ: Types;
  receipt_recover_dt: Types;
  fssp_date: Types;
  r_court_id: Types;
  dsc: Types;
};
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
    setData: (state, action: { payload: [Names, Types] }) => {
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
