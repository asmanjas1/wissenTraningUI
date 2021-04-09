export function saveLocalUsr(object) {
    localStorage.setItem('user', JSON.stringify(object).replace(/['"]+/g, ''));
    
}

export function getLocalUser() {
    
    var uName= localStorage.getItem('user');
    console.log(uName);
    
    if (uName) {
        return true;
    }
    window.location.href='/Login';
    
    return false;

}
export function doLogout() {
    
    localStorage.removeItem('user');

localStorage.clear();
    window.location.href='/Login'; 
//alert("Click on OK to confirm Logout" );
}


 



