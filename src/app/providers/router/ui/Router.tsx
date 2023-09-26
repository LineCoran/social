import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { Suspense } from 'react'


export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          {Object.values(routeConfig)
            .map(({element, path}) => <Route path={path} element={element} key={path} />)}
      </Routes>
    </Suspense>
  )
}