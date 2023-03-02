import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import View from "views/view";

export interface PageState {
  view: View;
}

const initialState: PageState = {
  view: View.Login,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<View>) => {
      state.view = action.payload;
    },
  },
});

export const selectView = (state: RootState) => state.page.view;
export const { setView } = pageSlice.actions;

export default pageSlice.reducer;
