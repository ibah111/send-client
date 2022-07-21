import { GridInitialStatePremium } from "@mui/x-data-grid-premium/models/gridStatePremium";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: {
  page: GridInitialStatePremium;
  create: GridInitialStatePremium;
  debt: GridInitialStatePremium;
} = {
  page: {},
  create: {},
  debt: {},
};
export const StateResults = createSlice({
  name: "StateResults",
  initialState,
  reducers: {
    setPageState: (state, action: PayloadAction<GridInitialStatePremium>) => {
      state.page = action.payload;
    },
    setCreateState: (state, action: PayloadAction<GridInitialStatePremium>) => {
      state.create = action.payload;
    },
    setDebtState: (state, action: PayloadAction<GridInitialStatePremium>) => {
      state.debt = action.payload;
    },
  },
});
export const { setPageState, setCreateState, setDebtState } =
  StateResults.actions;
export default StateResults.reducer;
