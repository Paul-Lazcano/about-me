import React, { useState } from 'react'

export const ThemeContext = React.createContext({});
export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  )
}
