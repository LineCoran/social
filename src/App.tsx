import React, { useState } from 'react'
import { Counter } from './components/Counter'
import './styles/index.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPageLazy } from './pages/main/Main.async';
import { AboutPageAsync } from './pages/about/About.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';

export const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<MainPageLazy />} index path={'/'}/>
          <Route element={<AboutPageAsync />} path={'/about'} />
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  )
}
