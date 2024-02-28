import React, { useState, createContext, ReactNode, useContext } from "react";

interface UIThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

interface UIProviderProps {
  children: ReactNode;
}

const defaultState = {
  dark: false,
};

const UIContext = createContext<UIThemeContext>(defaultState);

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };
  return (
    <UIContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => useContext(UIContext);
export default UIContext;
