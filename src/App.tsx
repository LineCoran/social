import React from 'react'
import { Counter } from './components/Counter'
import './index.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPageLazy } from './pages/main/Main.async';
import { AboutPageAsync } from './pages/about/About.async';
import { Suspense } from 'react';

export const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainPageLazy />} index path={'/'}/>
        <Route element={<AboutPageAsync />} path={'/about'} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}
