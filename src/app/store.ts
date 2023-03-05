import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pageReducer from "app/slices/pageSlice";
import placesReducer from "app/slices/placesSlice";
import themeReducer from "app/slices/themeSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    places: placesReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
