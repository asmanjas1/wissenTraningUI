import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';



import {saveLocalUsr}  from '../AppUtills/AppUtills';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
     // formIsValid: true
    
    }

    this.handleChange = this.handleChange.bind(this);
    this.doLogin = this.doLogin.bind(this);
    
  };

  handleChange(e) {

    
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    
  }

  doLogin(e) {
    e.preventDefault();

    if (this.validateForm()) {
     
      let fields = {};
      fields["Username"] = "";
      fields["Userpassword"] = "";
      this.setState({ fields: fields });
      saveLocalUsr(this.state.fields["Username"]);
      
      window.location.href='/Home';
      
    }
    
    }
   
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid =true;
    //var Userfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (!fields["Username"]) {
      formIsValid = false;
      errors["Username"] = "*Please enter your username.";
    }
    
    if (typeof fields["Username"] !== "undefined") {
      if (!fields["Username"].match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
        formIsValid = false;
        errors["Username"] = "*Enter valid e-mail";
      }
    }


    if (!fields["Userpassword"]) {
      formIsValid = false;
      errors["Userpassword"] = "*Please enter your password.";
    }

    if (typeof fields["Userpassword"] !== "undefined") {
      if (!fields["Userpassword"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["Userpassword"] = "*Incorrect password.";
      }
    }


    this.setState({
      errors: errors
    });
    return formIsValid;
    

  }

  render() {

    return (
    
        <div className="container-fluid" >

          <div className="row  justify-content-center ">
            <div className="col-6 col-sm-4 col-md-3">
           


              <form className="for-container "  onsubmit={this.doLogin} >
                <div className="form-group" >
                  <p style={{ textAlign: "center"}}><b>User login</b> </p>
                  <label for="username">Username </label>

                  <div className="fontuser">
                    <i className="fa fa-user fa-lg"></i>
                    <input type="username" name="Username"  onChange={this.handleChange} className="form-control" placeholder="Enter username " style={{ textAlign: "center" }}
                      id="usr" />
                    <p  style={{ color: "red" }}>{this.state.errors.Username}</p>

                  </div>

                </div>
                <div className="form-group">

                  <label for="password">Password</label>
                  <div className="fontpassword">
                    <i className="fa fa-key fa-lg"></i>
                    <input type="password" name="Userpassword" onChange={this.handleChange} className="form-control " style={{ textAlign: "center" }} placeholder="Enter password"
                      id="pwd" />

                    <p style={{ color: "red" }}>{this.state.errors.Userpassword}</p>
                       

                  </div>
                 
                </div>

                  <div class="form-check ">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Remember me</label>
                   </div>
  

                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary btn-sm mr-1"  onClick={this.doLogin} >Login</button>
                
                  <a className="btn btn-primary btn-sm mr-1" href="/signupform" style={{ color: "white" }}> Sign Up </a>

                </div>

                

              </form>

            </div>

          </div>

        </div>
       
    );

  }
}



export default Login;