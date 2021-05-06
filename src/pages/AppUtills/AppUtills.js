export function saveLocalUsr(object) {
    localStorage.setItem('user', JSON.stringify(object).replace(/['"]+/g, ''));

    
}
export function saveLocalPwd(object)
{
    localStorage.setItem('pwd', JSON.stringify(object));
}

export function saveLocalemail(object)
{
    localStorage.setItem('email', JSON.stringify(object));
}

export function saveLocallname(object)
{
    localStorage.setItem('lName', JSON.stringify(object));
} 

export function saveLocals1(object)
{
    localStorage.setItem('s1', JSON.stringify(object));
} 
export function saveLocals2(object)
{
    localStorage.setItem('s2', JSON.stringify(object));
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
 



