import './styles/index.scss'
import { Routes, Route } from "react-router-dom";
import { Main } from 'pages/Main';
import { About } from 'pages/About';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Router } from './providers/router';

export const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
        <Router />
  )
}
