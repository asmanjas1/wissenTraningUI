import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotFound from './pages/commonComponents/NotFound.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
    <div>

            <div className="main-cls" style={{minWidth: '1100px'}}>
                <div>
                    <Switch>
                        <Route path="/r" component={App}/>
                        <Route exact path="/" render={() => (
                            <Redirect to="/r"/>
                        )}/>
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </div>

        </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
