import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pageReducer from "features/page/pageSlice";
import themeReducer from "features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
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
