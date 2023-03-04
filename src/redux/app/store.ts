import { configureStore } from "@reduxjs/toolkit";
import { historySlice } from "../features/HistorySlice";
import userReducer from "../features/UserSlice";
export const store = configureStore({
  reducer: {
    user :userReducer,
    history:historySlice.reducer
    
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
