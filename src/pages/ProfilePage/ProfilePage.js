import React from 'react';


class ProfilePage extends React.Component {
  
  

  componentDidMount(){
    console.log("This is message");   
 }
 
  
  render() {
    return (
      <div >
        
   <h3> Email :<b>{localStorage.getItem('user')}</b></h3>
   


    </div>
    
    );
  }
  
 
}

export default ProfilePage;

