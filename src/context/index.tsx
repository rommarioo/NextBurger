"use client";
import { createContext, useState, useContext } from "react";

type ContextBurger = {
  id: string;
  burgerName: string;
  image: string;
  price: number;
  count?: number;
};
type AppContextType = {
  state: ContextBurger[];
  setState: (state: ContextBurger[]) => void;
};
const AppContext = createContext<AppContextType>({
  state: [],
  setState: () => {},
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<ContextBurger[]>([]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
