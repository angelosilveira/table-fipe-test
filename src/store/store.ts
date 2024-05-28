"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carsReducer from "./cars/carsSlice";

const rootReducer = combineReducers({
  cars: carsReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
