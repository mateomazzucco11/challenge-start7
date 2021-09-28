import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';


export const AuthRouter = ({setIsLoggedIn, isLoggedIn}) => {
  return (
    <Switch>
      <Route
          exact
          path='/auth/login'
      >
        <LoginScreen setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      </Route>

      <Redirect to='/auth/login' />
    </Switch>
  )
}
