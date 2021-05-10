import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Login.css';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import {saveLocalUsr, routingUserType}  from '../AppUtills/AppUtills';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
       modal: false,
     popuptitle:"",
     isSuccess:true,
     username:"",
    
    }

    this.handleChange = this.handleChange.bind(this);
    this.doLogin = this.doLogin.bind(this);
     this.toggle = this.toggle.bind(this);
    
  };

 

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  doLogin(e) {
    e.preventDefault();

    if (this.validateForm()) {
     
     
     // saveLocalUsr(this.state.fields["Username"]);
      
     // routingUserType();

       let user = {
      'email': this.state.fields.Useremail,
      'password': this.state.fields.Userpassword,
       }

         console.log(user);
       let headers = {
      'Accept': 'application/json'
       };

        let config = {
      headers: headers
      };

       let url = "http://localhost:8081/userController/login";


       axios.post(url, user, config)
      .then(response => {
        let userObj = response.data;
        this.setState({isSuccess:true})

        saveLocalUsr(userObj);

        routingUserType();
        })
        .catch(error => {
          this.setState({popuptitle:"Error!", isSuccess:false,})
          this.toggle()
          console.log(error.response);
        });

      
    }
    
    }
   
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid =true;
    //var Userfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (!fields["Useremail"]) {
      formIsValid = false;
      errors["Useremail"] = "*Please enter your e-mail.";
    }
    
    if (typeof fields["Useremail"] !== "undefined") {
      if (!fields["Useremail"].match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
        formIsValid = false;
        errors["Useremail"] = "*Enter valid e-mail";
      }
    }


    if (!fields["Userpassword"]) {
      formIsValid = false;
      errors["Userpassword"] = "*Please enter your password.";
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
           


              <form className="for-container "  >
                <div className="form-group" >
                  <p style={{ textAlign: "center"}}><b>User login</b> </p>
                  <label for="username">Username </label>

                  <div className="fontuser">
                    <i className="fa fa-user fa-lg"></i>
                    <input type="useremail" name="Useremail"  onChange={this.handleChange} className="form-control" placeholder="Enter username " style={{ textAlign: "center" }}
                      id="usr" />
                    <p  style={{ color: "red" }}>{this.state.errors.Useremail}</p>

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
               
         <div className="d-flex justify-content-center">
           <button className="btn btn-primary btn-sm mr-1"  onClick= {this.doLogin}>Login</button>
             <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                 
                  {!this.state.isSuccess && <ModalHeader toggle={this.toggle} style={{ color: "red" }} ><b>{this.state.popuptitle}</b></ModalHeader>}
                  {!this.state.isSuccess && <ModalBody><p>The email or password you entered  is incorrect</p></ModalBody>}
                
                 <ModalFooter>
                    <Button color="primary"  onClick={this.toggle}>OK</Button>
                </ModalFooter>

              </Modal>
         
                
                  <a className="btn btn-primary btn-sm mr-1" href="/signup" style={{ color: "white" }}> Sign Up </a>

                </div>

                

              </form>

            </div>

          </div>

        </div>
       
    );

  }
}



export default Login;