import { createSlice } from "@reduxjs/toolkit";
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
    setId: () => {},
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
} = send.actions;
export default send.reducer;
