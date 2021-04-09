import './App.css';
import Login from './pages/LoginPage/Login';
import Home from './pages/LandingPage/Adminlandingpage.js';
//import MyComponent from './pages/SideNavigationBar/SideNav.js';
import NavBarex from './pages/UserLandingPage/UserLandingPage.js';


function App() {
  return (
    <div className="App">

      <Home/>
      <NavBarex/>
    </div>
  );
}

export default App;
