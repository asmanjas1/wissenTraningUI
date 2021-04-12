import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../LoginPage/Login';

const SecuredRoute = ({ component: Component, ...rest }) => {
   let userObj = localStorage.getItem('user');

  if (userObj) {
      return (<Route {...rest} render={(props) => (<Component {...props} />)} />);
    } else {
      return (<Route {...rest} render={(props) => (<Login {...props} />)} />);
    }
}


export default SecuredRoute;
