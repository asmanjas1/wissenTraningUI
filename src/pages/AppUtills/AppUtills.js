export function saveLocalUsr(object) {
    localStorage.setItem('user', JSON.stringify(object));
   

    
}

export function doLogout() {
  localStorage.removeItem('user');
  localStorage.clear();
  
  window.location.href='/r/Login'; 
}

export function routingUserType () {
  let userObj = localStorage.getItem('user');
  if( userObj ) {
    let userType = userObj.isAdmin;
    if(userType)
      window.location.href = "/r/adminLandingPae";
    else
      window.location.href = "/r/userLandingPage";
  }
}
 



