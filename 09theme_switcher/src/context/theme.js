// Step 1
import {createContext,useContext} from 'react'
// Step 2 & 3
export const ThemeContext=createContext({
  themeMode:"light",
  darkTheme:()=>{},
  lightTheme:()=>{},
})
// Step 4 & 5 & 6
export const ThemeProvider=ThemeContext.Provider

export default function useTheme() {
  return useContext(ThemeContext)
}
