import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
export const send = createSlice({
  name: "send",
  initialState: {
    total_sum: "",
    load_dt: "",
    court_doc_num: "",
    executive_typ: 0,
  },
  reducers: {
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
  },
});
export const { setTotalSum, setLoadDt, setCourtDocNum, setExecutiveTyp } =
  send.actions;
export default send.reducer;
