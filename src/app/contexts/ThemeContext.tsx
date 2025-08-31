import React, { createContext, useState, useContext, useEffect } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => setTheme((prev) => {
    const theme = prev === 'light' ? 'dark' : 'light';

    localStorage.setItem('app-theme', theme);
    
    return theme;
  });

  useEffect(() => {
    localStorage.getItem('app-theme') === 'dark' ? setTheme('dark') : setTheme('light');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};