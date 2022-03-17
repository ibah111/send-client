import { createSlice } from "@reduxjs/toolkit";
export const results = createSlice({
  name: "Results",
  initialState: [],
  reducers: {
    setResults: (state, action) => {
      return action.payload;
    },
  },
});
export const { setResults } = results.actions;
export default results.reducer;
