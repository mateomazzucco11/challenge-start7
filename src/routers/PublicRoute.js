import React from 'react'

import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  isLoggedIn,
  setIsLoggedIn,
  ...rest
}) => {
  return (
    <Route { ...rest }
      component={(props) => (
        (!isAuthenticated)
          ? (<Component {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>)
          : (<Redirect to='/' />)
      )}
    />
  )
}
