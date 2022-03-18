import { createContext, useState } from "react";

const DarkContext = createContext("");

export function DarkProvider({ children }) {
  const [isDark, setIsDark] = useState(true);
  return (
    <DarkContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkContext.Provider>
  );
}

export default DarkContext;
