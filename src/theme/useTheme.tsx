import { Theme } from "./ThemeContenxt"
import { useContext } from "react"
import { ThemeContext } from "./ThemeContenxt"

interface useThemeData {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): useThemeData => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () =>  setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    return {
        theme,
        toggleTheme
    }
}