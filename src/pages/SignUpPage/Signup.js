import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Signup.css';


class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname:"",
      eid:"",
      email:"",
      password: "",


      fnameError: "",
      lnameError: "",
      eidError:"",
      emailError:"",
      passwordError: ""
    }
  }

  valid() {
    var uname = "sneha";
    
      var upattern = /^[A-Za-z]+$/;
      var eidpattern=/^[0-9]+$/;
      var emailpattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



///for firstname validation

    if (!this.state.fname.match(upattern)) {
      if(this.state.fname.length<4){
      this.setState({ fnameError: "*Enter a valid Firstname" })
    }
  }

 ////for last name validation
  if (!this.state.lname.match(upattern)) {
      if(this.state.lname.length<=5){
      this.setState({ lnameError: "*Enter a valid lastname" })
    }
  }

 ///for eid validation
  if (!this.state.eid.match(eidpattern)) {
      
      this.setState({ eidError: "*Enter a valid EMP-ID" })
    
  }

  ///for email validation
   if (!this.state.email.match(emailpattern)) {
      
      this.setState({ emailError: "*Enter a valid emailid" })
    
  }


  //for pwd validation
    if (this.state.password<=1) {
      this.setState({ passwordError: "*Enter a valid password" })
    }


    else {
     
      return true;
    }
  }

  submit() {
    this.setState({fnameError: "",lnameError:"",eidError:"",emailError:"",passwordError:"" })

     
    if (this.valid()) {
      
     // saveLocalUsr({usrname: this.state.name });
     window.alert("Signup");
  

    }
    
  
  }




render(){
  return (
    <div className="container-fluid">
    <div className="container" >
      <div className="col-msm-4 ">
 
        <div className="row justify-content-center">
          <div className="Home">
            <h1>User Signup </h1>
   
            <label htmlFor="fname">First Name</label><br />
            <input type="text" className="input-field" placeholder="Enter first name" style={{ width: 300 }} onChange={(event) => { this.setState({ fname: event.target.value }) }} />
            <p  data-toggle="tooltip" data-placement="top" title="Enter your first name( Ex: Abdul )" style={{ color: "red" }}>{this.state.fnameError}</p>

            <label htmlFor="LASTNAME" >Last Name </label><br />
            <input type="text" className="input-field" placeholder="Enter last name" style={{ width: 300 }} onChange={(event) => { this.setState({ lname: event.target.value }) }} />
            <p  data-toggle="tooltip" data-placement="top" title="Enter your last name( Ex: kalam )" style={{ color: "red" }}>{this.state.lnameError}</p>

            <label htmlFor="EMPID" >Emp-Id</label><br />
            <input type="text" className="input-field" placeholder="Enter Employee-id" style={{ width: 300 }} onChange={(event) => { this.setState({eid: event.target.value }) }} />
            <p data-toggle="tooltip" data-placement="top" title="Employee-id should contain only numbers" style={{ color: "red" }}>{this.state.eidError}</p>

            <label htmlFor="EMAIL" >Email </label><br />
            <input type="text" className="input-field" placeholder="Enter email" style={{ width: 300 }} onChange={(event) => { this.setState({ email: event.target.value }) }} />
            <p data-toggle="tooltip" data-placement="top" title="Your email should be like Ex: abcd@email.com"  style={{ color: "red" }}>{this.state.emailError}</p>




            <label htmlFor="password">Password</label><br />
            <input type="password" className="input-field" placeholder="Enter Password" style={{ width: 300 }} onChange={(event) => { this.setState({ password: event.target.value }) }} />
            <p data-toggle="tooltip" data-placement="top" title="Password should have minimun 8 character including atleast one Uppercase &Lower case alphabets,one digit and one special characters(@,_)" style={{ color: "red" }}>{this.state.passwordError}</p>

            <button class="btn btn-primary btn-sm mr-1" onClick={() => this.submit()}>SIGN UP</button>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}
}
export default Signup;