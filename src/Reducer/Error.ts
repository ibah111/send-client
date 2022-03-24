import { createSlice } from "@reduxjs/toolkit";
import { initState, Names } from "./Send";
export const error = createSlice({
  name: "error",
  initialState: initState,
  reducers: {
    setError: (state, action: { payload: [Names, string | null] }) => {
      state[action.payload[0]] = action.payload[1];
    },
    reset: (state) => {
      return initState;
    },
  },
});
export const { setError, reset } = error.actions;
export default error.reducer;
