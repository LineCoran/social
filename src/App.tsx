import React from 'react'
import { Counter } from './components/Counter'
import './index.scss'

export const App = () => {
  return (
    <div className='app'>
        <p>Hello world</p>
        <Counter />
    </div>
  )
}
