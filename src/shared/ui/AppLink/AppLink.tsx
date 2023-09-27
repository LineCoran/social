import { classNames } from "shared/lib/classNames/classNames"
import { Link, LinkProps } from "react-router-dom"
import cls from './AppLink.module.scss'
import { FC } from "react"

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className, to, theme, children, ...otherProps } = props
  return (
    <Link
      {...otherProps}
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
        {children}
    </Link>
  )
}
