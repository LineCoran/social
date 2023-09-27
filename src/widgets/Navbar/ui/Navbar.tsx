import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui"
import cls from './Navbar.module.scss'
import { AppLinkTheme } from "shared/ui/AppLink/AppLink"

type NavbarProps = {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links, {}, [])}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  )
}








