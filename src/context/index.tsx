"use client";
import { Burger } from "@/helpers/types";
import { createContext, useState, useContext } from "react";

type AppContextType = {
  state: Burger[];
  setState: (state: Burger[]) => void;
};
const AppContext = createContext<AppContextType>({
  state: [],
  setState: () => {},
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<Burger[]>([]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
