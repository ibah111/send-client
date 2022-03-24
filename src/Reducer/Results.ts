import { createSlice } from "@reduxjs/toolkit";
export const results = createSlice({
  name: "Results",
  initialState: { loading: false, data: [] },
  reducers: {
    setResults: (state, action) => {
      state.data = action.payload;
    },
    setLoadingResults: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { setResults, setLoadingResults } = results.actions;
export default results.reducer;
