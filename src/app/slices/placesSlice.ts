import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export interface PageState {
  currentUsername: string;
}

const initialState: PageState = {
  currentUsername: "",
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setCurrentUsername: (state, action: PayloadAction<string>) => {
      state.currentUsername = action.payload;
    },
  },
});

export const selectCurrentUsername = (state: RootState) =>
  state.places.currentUsername;
export const { setCurrentUsername } = placesSlice.actions;

export default placesSlice.reducer;
