import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import Nbar from './pages/NavigationBar/Navigationbar.js';
import NotFound from './pages/commonComponents/NotFound.js';
import AdminLandingPage from './pages/AdminLandingPage/AdminLandingPage.js';
import UserLandingPage from './pages/UserLandingPage/UserLandingPage.js';
import Signup from './pages/SignUpPage/Signup';
import AdminAction from './pages/AdminActionPage/AdminActionPage.js';
import Profile from './pages/ProfilePage/ProfilePage.js';
import References from './pages/ReferencesPage/References.js';
import Assessment from './pages/AssessmentPage/Assessment.js';
import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage.js';

import './App.css';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div>
				<Nbar />
    				<div>
            			<Switch>
                            <Route path="/r/signup" component={Signup}/>
                			<Route path="/r/adminLandingPage" component={AdminLandingPage}/>
                            <Route path="/r/userLandingPage" component={UserLandingPage}/>

                            <Route path="/r/assessment" component={Assessment}/>
                            <Route path="/r/references" component={References}/>

                            <Route path="/r/myprofile" component={Profile}/>

                			<Route path="/r/adminActionPage" component={AdminAction}/>
                            <Route path="/r/UserDetailsPage" component={UserDetailsPage}/>

                			<Route path="*" component={NotFound} />
            			</Switch>
        			</div>
  			</div>
  		);
	}
}

export default App;
