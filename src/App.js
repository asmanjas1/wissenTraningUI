import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import Nbar from './pages/NavigationBar/Navigationbar.js';
import NotFound from './pages/commonComponents/NotFound.js';
import Login from './pages/LoginPage/Login';
import AdminLandingPage from './pages/AdminLandingPage/AdminLandingPage.js';
import UserLandingPage from './pages/UserLandingPage/UserLandingPage.js';
import Signup from './pages/SignUpPage/Signup';

import './App.css';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			user: null
		}
	}

	componentDidMount() {
		
	}

	render () {
		return (
			<div>
				<Nbar />
    				<div>
            			<Switch>
                			<Route path="/r/login" component={Login}/>
                			<Route path="/r/adminLandingPage" component={AdminLandingPage}/>
                			<Route path="/r/userLandingPage" component={UserLandingPage}/>
                			<Route path="/r/signup" component={Signup}/>
                			<Route path="*" component={NotFound} />
            			</Switch>
        			</div>
  			</div>
  		);
	}
}

export default App;
