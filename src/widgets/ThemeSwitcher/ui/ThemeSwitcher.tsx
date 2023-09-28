import { classNames } from "shared/lib/classNames/classNames"
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from "app/providers/ThemeProvider"
import { FC } from "react"

type ThemeSwitcherProps = {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className, children }) => {

  const { toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
      {children}
    </button>
  )
}
