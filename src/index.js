import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotFound from './pages/commonComponents/NotFound.js';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SecuredRoute from './pages/AppUtills/SecuredRoute';
import Signup from './pages/SignUpPage/Signup';

ReactDOM.render(
  <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
    <div>

            <div className="main-cls" >
                <div>
                    <Switch>
                        <SecuredRoute path="/r" component={App}/>
                        <Route exact path="/" render={() => (
                            <Redirect to="/r"/>
                        )}/>
                        <Route path="/signup" component={Signup} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </div>

        </div>
  </BrowserRouter>,
  document.getElementById('root')
);