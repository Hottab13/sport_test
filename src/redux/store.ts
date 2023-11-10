import { configureStore } from "@reduxjs/toolkit";
import { InPlayApi } from "./InPlayApi";

const store = configureStore({
  reducer: {
    [InPlayApi.reducerPath]: InPlayApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      InPlayApi.middleware,
    ]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
