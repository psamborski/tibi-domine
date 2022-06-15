import React, { Suspense, useEffect, useState } from 'react'
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom'

import ScrollToTop from '../ScrollToTop'

const Page404 = () => <div>404</div>
const LoadingPage = () => <div>Loading</div>

const renderRoutes = (routes) => routes.map((
  {
    component: Component,
    guard,
    children,
    rootPath,
    id,
    redirect,
  },
) => {
  const ParentGuard = guard || React.Fragment

  const parentRoute = redirect || Component
    ? (
      <Route
        key={`route-${id}`}
        element={(
          <ParentGuard>
            {Component && <Component />}
            {redirect && <Navigate to={redirect} />}
          </ParentGuard>
        )}
        path={rootPath}
      />
    )
    : null

  const childrenRoutes = children
    ? children.map((element) => {
      const Guard = element?.guard || ParentGuard || React.Fragment

      return (
        <Route
          key={`route-${id}-${element.name}`}
          element={(
            <Guard>
              {element.component && <element.component />}
              {element.redirect && <Navigate to={element.redirect} />}
            </Guard>
        )}
          path={`/${(rootPath + element.childPath).replace(/^\/+/, '')}`}
        />
      )
    })
    : []

  return [parentRoute, ...childrenRoutes]
})

export const RoutesComponent = (props) => {
  const { routes } = props
  const [loaderTimeout, setLoaderTimeout] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaderTimeout(false), 5000)
  }, [])

  return (
    <>
      {loaderTimeout && <LoadingPage />}
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            {renderRoutes(routes)}
            {/* <Route */}
            {/*  element={<Test />} */}
            {/*  path='/' */}
            {/* /> */}
            <Route
              element={<Page404 />}
              path='*'
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}
