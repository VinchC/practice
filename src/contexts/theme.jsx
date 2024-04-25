/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const DisplayModeContext = createContext();

export default function DisplayModeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  return (
    <DisplayModeContext.Provider value={{ theme, setTheme }}>
      {children}
    </DisplayModeContext.Provider>
  );
}

export const useTheme = () => useContext(DisplayModeContext);
