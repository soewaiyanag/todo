import { createContext, useState } from 'react';

const DarkContext = createContext('');

// check if machine is using light mode or dark mode
function preferDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

export function DarkProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(preferDarkMode());

  return (
    <DarkContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
}

export default DarkContext;
