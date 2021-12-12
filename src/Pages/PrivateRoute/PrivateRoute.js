import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import GetAuth from './../Context/GetAuth';

function PrivateRoute({ children, ...rest }) {
    let {user,isLoading} = GetAuth();
    if(isLoading){
        return <Spinner className="mt-5" animation="grow" />
    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
export default PrivateRoute;