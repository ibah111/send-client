import { createSlice } from "@reduxjs/toolkit";
import getLawExec from "../api/getLawExec";
export const send = createSlice({
  name: "send",
  initialState: {
    id: 0,
    total_sum: "",
    load_dt: "",
    court_doc_num: "",
    executive_typ: 0,
    court_date: "",
    delivery_typ: 0,
    entry_force_dt: "",
    receipt_recover_dt: "",
    fssp_date: "",
    r_court_id: 0,
    dsc: "",
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setSend: (state, action) => {
      const data = action.payload;
      state.total_sum = data.total_sum;
      state.load_dt = data.load_dt;
      state.court_doc_num = data.court_doc_num;
      state.executive_typ = data.executive_typ;
      state.court_date = data.court_date;
      state.delivery_typ = data.DELIVERY_TYP;
      state.entry_force_dt = data.entry_force_dt;
      state.receipt_recover_dt = data.receipt_recover_dt;
      state.fssp_date = data.fssp_date;
      state.r_court_id = data.r_court_id;
      state.dsc = data.dsc;
    },
    setTotalSum: (state, action) => {
      state.total_sum = action.payload;
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
      state.delivery_typ = action.payload;
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
} = send.actions;
export default send.reducer;
