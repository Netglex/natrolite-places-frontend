import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export interface ThemeState {
  dark: boolean;
}

const initialState: ThemeState = {
  dark: window?.matchMedia("(prefers-color-scheme: dark)").matches,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDark: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
  },
});

export const selectDark = (state: RootState) => state.theme.dark;
export const { setDark } = themeSlice.actions;

export default themeSlice.reducer;
