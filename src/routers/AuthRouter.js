import React from 'react';
import { Route } from 'react-router-dom';
import Auth from '../pages/auth/'

const AuthRoutes = ({ match }) => {
  return (
    <>
        <Route
            exact
            path={`${match.path}/`}
            component={Auth}
        />
    </>
  );
};

export default AuthRoutes;