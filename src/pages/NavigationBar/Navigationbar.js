import React from 'react';

import {doLogout} from '../AppUtills/AppUtills.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigationbar.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Image } from 'react-bootstrap';


function itemmouseover(e) {
  
  e.target.style.background = 'lawngreen';
  

}
function itemmouseout(e) {
 // e.target.style.background = '';
  
 
}

class Nbar extends React.Component {
    render() {
       return (


          <div>
         


          <nav className="navbar navbar-expand-sm navbar bg-light navigationstyle" data-component="NavigationBar">
                   


<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
        <i className="fa fa-user fa-lg username1" >   {localStorage.getItem('user')}</i> 
       <ul className="navbar-nav ml-auto">
      
       <NavDropdown title="Home" id="basic-nav-dropdown"  >
         <NavDropdown.Item href="/Document" onMouseOver={itemmouseover} onMouseOut={itemmouseout} >Document</NavDropdown.Item>
        
       </NavDropdown>
       <NavDropdown className="navmenutextcolor" title="Account" id="basic-nav-dropdown" >
         <NavDropdown.Item href="/Profile"  onMouseOver={itemmouseover} onMouseOut={itemmouseout}>Profile</NavDropdown.Item>
         <NavDropdown.Divider  />
         <NavDropdown.Item href="/About" onMouseOver={itemmouseover} onMouseOut={itemmouseout}>About</NavDropdown.Item>
         
        
         
       </NavDropdown>
       <button type="button" class="btn btn-outline-primary btn-sm" onClick={doLogout}>Logout</button>
       
        
      
       </ul>
     </nav>
  
         
             
          </div>
       )
    }
 }
 export default Nbar;