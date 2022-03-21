import { createSlice } from "@reduxjs/toolkit";
import getName from "../utils/getName";
const g = (value: any, type?: string) =>
  null === value ? (type === "number" ? 0 : "") : value;
export const send = createSlice({
  name: "send",
  initialState: {
    id: 0,
    fio: "",
    contract: "",
    total_sum: "",
    load_dt: "",
    court_doc_num: "",
    executive_typ: 0,
    court_date: "",
    DELIVERY_TYP: 0,
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
      state.fio = getName([data.Person.f, data.Person.i, data.Person.o]);
      state.contract = data.Debt.contract;
      state.total_sum = g(data.total_sum);
      state.load_dt = g(data.load_dt);
      state.court_doc_num = g(data.court_doc_num);
      state.executive_typ = g(data.executive_typ);
      state.court_date = g(data.court_date);
      state.DELIVERY_TYP = g(data.DELIVERY_TYP);
      state.entry_force_dt = g(data.entry_force_dt);
      state.receipt_recover_dt = g(data.receipt_recover_dt);
      state.fssp_date = g(data.fssp_date);
      state.r_court_id = g(data.r_court_id);
      state.dsc = g(data.dsc);
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
} = send.actions;
export default send.reducer;
