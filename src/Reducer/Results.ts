import { createSlice } from "@reduxjs/toolkit";
const initialState: { loading: boolean; data: any[] } = {
  loading: false,
  data: [],
};
export const results = createSlice({
  name: "Results",
  initialState: initialState,
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
