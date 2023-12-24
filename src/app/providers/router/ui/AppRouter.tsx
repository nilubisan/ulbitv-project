import { getUserAuthData } from 'entities/User'
import React, { Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((route) => {
      if (!isAuth && route?.authOnly) return false

      return true
    })
  }, [isAuth])
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          {...{ key: path, path }}
          key={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  )
}

export default AppRouter
