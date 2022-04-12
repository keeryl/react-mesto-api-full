import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Footer from '../Footer/Footer.js';


function ProtectedRoute ({component: Component, ...props}) {
  return(
    <Route>
      {() =>
        props.loggedIn ? <><Component {...props} /> <Footer/></> : <Redirect to={"/sign-up"} />
      }
    </Route>
  )
}

export default ProtectedRoute;
