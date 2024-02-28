import React, {
  useState,
  useEffect,
  createContext,
  FC,
  useContext,
  ReactNode,
} from "react";

interface UIThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

// interface UIProviderProps {
//   children: ReactNode;
// }

const defaultState = {
  dark: false,
};

const UIContext = createContext<UIThemeContext>(defaultState);

export const UIProvider: FC<React.PropsWithChildren<Record<string, never>>> = ({
  children,
}) => {
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
