import moment from "moment";
import { createSlice } from "@reduxjs/toolkit";
import getName from "../utils/getName";
const initState: {
  fio: null | String;
  contract: null | String;
  total_sum: null | Number;
  load_dt: null | String;
  court_doc_num: null | String;
  executive_typ: null | Number;
  court_date: null | String;
  DELIVERY_TYP: null | Number;
  entry_force_dt: null | String;
  receipt_recover_dt: null | String;
  fssp_date: null | String;
  r_court_id: null | Number;
  dsc: null | String;
} = {
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
  fssp_date: null,
  r_court_id: null,
  dsc: null,
};
export const send = createSlice({
  name: "send",
  initialState: { id: 0, ...initState },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setSend: (state, action) => {
      const data = action.payload;
      state.fio = getName([data.Person.f, data.Person.i, data.Person.o]);
      state.contract = data.Debt.contract;
      state.load_dt = moment().toISOString();
      state.court_doc_num = data.court_doc_num;
      state.executive_typ = data.executive_typ;
      state.court_date = data.court_date;
      state.DELIVERY_TYP = 1;
      state.entry_force_dt = data.entry_force_dt;
      state.receipt_recover_dt = data.receipt_recover_dt;
      state.fssp_date = moment().toISOString();
      state.r_court_id = data.r_court_id;
      state.dsc = data.dsc;
    },
    setTotalSum: (state, action) => {
      state.total_sum = action.payload;
    },
    reset: (state) => {
      return { id: state.id, ...initState };
    },
    setLoadDt: (state, action) => {
      state.load_dt = action.payload;
    },
    setCourtDocNum: (state, action) => {
      state.court_doc_num = action.payload;
    },
    setExecutiveTyp: (state, action) => {
      state.executive_typ = action.payload;
    },
    setCourtDate: (state, action) => {
      state.court_date = action.payload;
    },
    setDeliveryTyp: (state, action) => {
      state.DELIVERY_TYP = action.payload;
    },
    setEntryForceDt: (state, action) => {
      state.entry_force_dt = action.payload;
    },
    setReceiptRecoverDt: (state, action) => {
      state.receipt_recover_dt = action.payload;
    },
    setFsspDate: (state, action) => {
      state.fssp_date = action.payload;
    },
    setRCourtId: (state, action) => {
      state.r_court_id = action.payload;
    },
    setDsc: (state, action) => {
      state.dsc = action.payload;
    },
  },
});
export const {
  setTotalSum,
  setLoadDt,
  setCourtDocNum,
  setExecutiveTyp,
  setDeliveryTyp,
  setCourtDate,
  setEntryForceDt,
  setReceiptRecoverDt,
  setFsspDate,
  setRCourtId,
  setDsc,
  setId,
  setSend,
  reset,
} = send.actions;
export default send.reducer;
