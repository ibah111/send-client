import { GridInitialStatePro } from "@mui/x-data-grid-pro/models/gridStatePro";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: { page: GridInitialStatePro; create: GridInitialStatePro } = {
  page: {},
  create: {},
};
export const StateResults = createSlice({
  name: "StateResults",
  initialState,
  reducers: {
    setPageState: (state, action: PayloadAction<GridInitialStatePro>) => {
      state.page = action.payload;
    },
    setCreateState: (state, action: PayloadAction<GridInitialStatePro>) => {
      state.create = action.payload;
    },
  },
});
export const { setPageState, setCreateState } = StateResults.actions;
export default StateResults.reducer;
