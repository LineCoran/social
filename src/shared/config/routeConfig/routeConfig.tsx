import { About } from "pages/About"
import { Main } from "pages/Main"
import { PathRouteProps } from "react-router-dom"

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: Record<AppRoutes, PathRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Main />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <About />
    },
}