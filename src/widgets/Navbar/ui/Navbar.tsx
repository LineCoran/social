import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui"
import cls from './Navbar.module.scss'
import { AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { ThemeIcon } from "shared/assets/icons/ThemeIcon"
import ThemeIconLight from 'shared/assets/icons/theme-light.svg'
import ThemeIconDark from 'shared/assets/icons/theme-dark.svg'
import { useTheme } from "app/providers/ThemeProvider"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"

type NavbarProps = {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { theme } = useTheme()
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      
      <ThemeSwitcher >
        {theme === Theme.DARK ? <ThemeIconDark /> : <ThemeIconLight />}
      </ThemeSwitcher>
      <div className={classNames(cls.links, {}, [])}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  )
}








