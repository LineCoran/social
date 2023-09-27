import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider';
import { Router } from './providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';

export const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <Router />
        <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}
