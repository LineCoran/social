import { useMemo, useState } from "react"
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "./ThemeContenxt"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const memoTheme = useMemo(() => {
        return {
            theme: theme,
            setTheme: setTheme
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={memoTheme}>
            {children}
        </ThemeContext.Provider>
    )
}