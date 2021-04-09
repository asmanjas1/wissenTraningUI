import React from 'react';
import { Route } from 'react-router';
import Nbar from '../NavigationBar/Navigationbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getLocalUser}  from '../AppUtills/AppUtills.js';
import Sidebar from '../SideNavigationBar/SideNav.js';


class Home extends React.Component {
  
  

  componentDidMount(){
    console.log("This is message");
  getLocalUser();
   
 }
 
  
  render() {
    return (
      <div >
     
    <Nbar/>
   <h1>Home page</h1>
    </div>
    
    );
  }

 
  
 
  
  
 
}

export default Home;