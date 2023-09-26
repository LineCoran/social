import './styles/index.scss'
import { Routes, Route } from "react-router-dom";
import { Main } from 'pages/Main';
import { About } from 'pages/About';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';

export const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Main />} index path={'/'}/>
          <Route element={<About />} path={'/about'} />
        </Routes>
      </Suspense>
  )
}
