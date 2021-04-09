import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './logo.png';
//import {doLogout} from './AppUtils.js';
 function handleBox(e)
 {
   e.target.style.background="blue";
 }
 function handleBoxout(e)
 {
   e.target.style.background="white";
 }

class NavBarex extends React.Component {

  
  render() {
    return (


      <>
        <Navbar expand="lg | mg" bg="dark" variant="dark">
       

          <ul className=" navbar-nav ml-auto">


            <NavDropdown title="Reference" id="basic-nav-dropdown">
              <NavDropdown.Item onMouseOver={handleBox} onMouseOut={handleBoxout} href="/java">JAVA</NavDropdown.Item>
              <NavDropdown.Item onMouseOver={handleBox} onMouseOut={handleBoxout} href="/java">Python</NavDropdown.Item>
              <NavDropdown.Item onMouseOver={handleBox} onMouseOut={handleBoxout} href="/java">HTML</NavDropdown.Item>
              <NavDropdown.Item onMouseOver={handleBox} onMouseOut={handleBoxout} href="/java">CSS</NavDropdown.Item>

            </NavDropdown>
            
             <NavDropdown title="Test" id="basic-nav-dropdown">
              <NavDropdown.Item onMouseOver={handleBox} onMouseOut={handleBoxout} href="/test" >java test</NavDropdown.Item>
               <NavDropdown.Item onMouseOver={handleBox} onMouseOut={handleBoxout}href="/test">python test</NavDropdown.Item>

              <NavDropdown.Item onMouseOver={handleBox} onMouseOut={handleBoxout}href="/test">HTML test</NavDropdown.Item>

              <NavDropdown.Item onMouseOver={handleBox} onMouseOut={handleBoxout}href="/test">CSS test</NavDropdown.Item>

            </NavDropdown>


            <button type="button" >Logout</button>

          </ul>

        </Navbar>
      </>

    );
  }
}

export default NavBarex;