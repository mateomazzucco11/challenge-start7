import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { AuthRouter } from './AuthRouter'

import { ProjectScreen } from '../components/project/ProjectScreen'

export const AppRouter = () => {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    const auth = localStorage?.getItem('accessToken')

    if ( auth ) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn])

  return (
    <Router>
      <div className='approuter__main-content'>
        <Switch>
          <PublicRoute
            path='/auth'
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute 
            exact
            path='/'
            component={ProjectScreen}
            isAuthenticated={isLoggedIn}
          />
        </Switch>
      </div>
    </Router>
  )
}
