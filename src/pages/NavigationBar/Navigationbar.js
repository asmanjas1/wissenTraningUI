import React from 'react';

import {doLogout} from '../AppUtills/AppUtills.js';
import './Navigationbar.css';
import { NavDropdown } from 'react-bootstrap';



 


class Nbar extends React.Component {
  

      // urlmatch=window.location.href.match(/adminLandingPage/)
      //isUserAdmin=localStorage.getItem('user').match(/wissen@gmail.com/)
      

    render() {

             var user=localStorage.getItem('user');
             console.log( JSON.stringify(user).isAdmin);

             var isUserAdmin=false;
       return (

          <div>
         
          <nav className="navbar navbar-expand-sm navbar bg-light navigationstyle" data-component="NavigationBar">
                   

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
        <i className="fa fa-user fa-lg username1" >   {localStorage.getItem('user')}</i> 
       <ul className="navbar-nav ml-auto">
      
       <NavDropdown title="Services" id="basic-nav-dropdown">
         <NavDropdown.Item href="/r/assessment" >Assessment</NavDropdown.Item>
         <NavDropdown.Divider  />
         <NavDropdown.Item href="/r/references" >References</NavDropdown.Item>
         { isUserAdmin && <NavDropdown.Divider  />}
    
           {isUserAdmin && <NavDropdown.Item href="/r/adminactionpage"  >Admin Actions</NavDropdown.Item>}

       </NavDropdown>
       <NavDropdown className="navmenutextcolor" title="Account" id="basic-nav-dropdown" >
         <NavDropdown.Item href="/r/myprofile">My Profile</NavDropdown.Item>
         <NavDropdown.Divider  />
        <NavDropdown.Item href="/r/assessmenttaken" >Assessment Taken</NavDropdown.Item>
         
        
       </NavDropdown>
       <button type="button" className="btn btn-outline-primary btn-sm" onClick={doLogout}>Logout</button>
       
        
      
       </ul>
     </nav>
  
         
             
          </div>
       );
    }
 }
 export default Nbar;