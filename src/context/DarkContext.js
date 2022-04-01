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
  const [isDark, setIsDark] = useState(preferDarkMode());

  return (
    <DarkContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkContext.Provider>
  );
}

export default DarkContext;
