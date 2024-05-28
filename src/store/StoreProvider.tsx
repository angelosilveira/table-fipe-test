"use client";

import React from "react";
import { setupStore, AppStore, RootState } from "./store";
import { Provider } from "react-redux";

interface StoreProviderProps {
  children: React.ReactNode;
  preloadedState?: Partial<RootState>;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({
  children,
  preloadedState,
}) => {
  const store: AppStore = setupStore(preloadedState);

  return <Provider store={store}>{children}</Provider>;
};
