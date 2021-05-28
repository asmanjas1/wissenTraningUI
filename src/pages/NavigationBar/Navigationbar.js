import React from 'react';

import {doLogout, getUserObj} from '../AppUtills/AppUtills.js';
import './Navigationbar.css';
import { NavDropdown } from 'react-bootstrap';

function Nbar() {

  let user = getUserObj();
  let isUserAdmin = user.isAdmin;
  return (

          <div>
         
          <nav className="navbar navbar-expand-sm navbar bg-light navigationstyle" data-component="NavigationBar">
                   

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
        <i className="fa fa-user fa-lg username1" >   {getUserObj().name}</i> 
       <ul className="navbar-nav ml-auto">
      
       <NavDropdown title="Services" id="basic-nav-dropdown">
         <NavDropdown.Item href="/r/assessment" >Assessment</NavDropdown.Item>
         <NavDropdown.Divider  />
         <NavDropdown.Item href="/r/references" >References</NavDropdown.Item>
         { isUserAdmin && <NavDropdown.Divider  />}
    
           {isUserAdmin && <NavDropdown.Item href="/r/adminActionPage"  >Admin Actions</NavDropdown.Item>}
           { isUserAdmin && <NavDropdown.Divider  />}
              {isUserAdmin && <NavDropdown.Item href="/r/UserDetailsPage">User Details</NavDropdown.Item>}

       </NavDropdown>

       <NavDropdown className="navmenutextcolor" title="Account" id="basic-nav-dropdown" >
         <NavDropdown.Item href="/r/myprofile">My Profile</NavDropdown.Item>
        
       </NavDropdown>
       <button type="button" className="btn btn-outline-primary btn-sm" onClick={doLogout}>Logout</button>
       
        
      
       </ul>
     </nav>
  
         
             
          </div>
  );
}
 export default Nbar;