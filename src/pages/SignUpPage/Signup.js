import React from 'react';
import './Signup.css';
import axios from 'axios';
import {saveLocalfname,saveLocallname}  from '../AppUtills/AppUtills';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';




class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      modal: false,
     popupmessage:"",
     popuptitle:"",
     isSuccess:true,
     username:"",
    

      
     
     // formIsValid: true
    
    }

     this.handleChange = this.handleChange.bind(this);
    this.doSignIn = this.doSignIn.bind(this);
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

   doSignIn(e) {
    e.preventDefault();

    if (this.validateForm()) {
     
      let user = {
      'name': this.state.fields.Username,
      'email': this.state.fields.Usermail,
      'password': this.state.fields.Userpassword,
       }
     
           this.setState({ 
            username:user.name,
            usermail:user.email

            });

      console.log(user);
      

       let headers = {
      'Accept': 'application/json'
       };

       let config = {
      headers: headers
      };

     let url = "http://localhost:8081/userController/signUp";
     axios.post(url, user, config)
      .then(response => {

        this.setState({popuptitle:"Success!",isSuccess:true})
        this.toggle()
        console.log(response); 


        
        
      })
      .catch(error => {
       
             
         
          this.setState({popuptitle:"Error!",
            popupmessage:error.response.data.message,
            isSuccess:false,
           
            
          })
        
         this.toggle()
          console.log(error.response.data.message);


      });
      
      
    
      
    }
   

    }

     validateForm(e) {


    let fields = this.state.fields;
    let errors = {};
    let formIsValid =true;
    let isPassword=true;
    //var Userfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   // lblError.innerHTML = "Only Alphabets, Numbers, Dot and Underscore allowed in Username.";
  // ^[a-zA-z]*(\d*\.\d*)[a-zA-z]*$


    if (!fields["Username"]) {
      formIsValid = false;
      errors["Username"] = "*Please enter your username.";
    }
    
    if (typeof fields["Username"] !== "undefined") {
      
          if(fields["Username"].length < 4 ||!fields["Username"].match(/^[a-zA-Z]{4,15}$/) )
  {
        formIsValid = false;
        errors["Username"] = "*Enter valid username";
      }
    }

    if (!fields["Usermail"]) {
      formIsValid = false;
      errors["Usermail"] = "*Please enter your e-mail.";
    }

       if (typeof fields["Usermail"] !== "undefined") {
      if (!fields["Usermail"].match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
        formIsValid = false;
        errors["Usermail"] = "*Enter valid e-mail";
      }
    }

    if (!fields["Userpassword"] ) {
      formIsValid = false;
      isPassword=false;
      errors["Userpassword"] = "*Please enter your password.";
    }

    if (typeof fields["Userpassword"] !== "undefined") {
      if (!fields["Userpassword"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        isPassword=false;
        errors["Userpassword"] = "*Incorrect password.";
      }
    }

     if ( isPassword && !fields["Userconfirmpassword"]  ) {
      formIsValid = false;
      errors["Userconfirmpassword"] = "*Please confirm your password.";
    }


    if ( isPassword && typeof fields["Userconfirmpassword"] !== "undefined"  ) {
      if (!fields["Userconfirmpassword"].match(fields["Userpassword"])) {
        formIsValid = false;
        errors["Userconfirmpassword"] = "*Password are not matching.";
      }
    

    }


    this.setState({
      errors: errors
    });
    return formIsValid;
    

  }



  



render(){

  
  
  return (
    
        <div className="container-fluid" >
          <div className="row  justify-content-center ">
            <div className="col-6 col-sm-4 ">
              <form className="for-container"  >
                <div className="form-group " >
                   <p style={{ textAlign: "center"}}><b>User SignUp</b> </p>
                   <label htmlFor="uname">User Name</label><br />
                </div>


                <div className="form-group " >
                   <div className="fontuser">
                      <i className="fa fa-user fa-lg"></i>
                         <input type="username" name="Username" onChange={this.handleChange} className="form-control " style={{ textAlign: "center"}} placeholder="Enter username"  id="username" />
                         <p  data-toggle="tooltip" data-placement="top" title="Username length should be  4-15 characters and allows only small letters, capital letters" style={{ color: "red" }}>{this.state.errors.Username}</p>
                   </div>
                </div>

                <div className="form-group " >
                        <label htmlFor="EMAIL" >Email </label><br />
                     <div className="fontuser">
                        <i className="fa fa-envelope fa-lg"></i>
                         <input type="email" name="Usermail"  onChange={this.handleChange} className="form-control" placeholder="Enter email " style={{ textAlign: "center" }}
                         id="email" />
                          <p  data-toggle="tooltip" data-placement="top" title="Email should be like( Ex: name@wisseninfotech.com )" style={{ color: "red" }}>{this.state.errors.Usermail}</p>
                      </div>
                </div>


                <div className="form-group">
                        <label for="password">Password</label>
                     <div className="fontpassword">
                          <i className="fa fa-key fa-lg"></i>
                          <input type="password" name="Userpassword" onChange={this.handleChange} className="form-control " style={{ textAlign: "center" }} placeholder="Enter password"
                            id="pwd" />
                          <p data-toggle="tooltip" data-placement="top" title="Password should be minimun 8 character including atleast one Uppercase &Lower case alphabets,one digit and one special characters(@,_)" style={{ color: "red" }}>{this.state.errors.Userpassword}</p>

                      </div>
                </div>
          

                <div className="form-group">
                       <label htmlFor="password">Confirm Password</label><br />
                   <div className="fontpassword">
                       <i className="fa fa-key fa-lg"></i>
                       <input type="password" name="Userconfirmpassword" onChange={this.handleChange} className="form-control " style={{ textAlign: "center" }} placeholder="Confirm password"
                        id="pwd" />
                        <p data-toggle="tooltip" data-placement="top" title="Confirm password should be same as password " style={{ color: "red" }}>{this.state.errors.Userconfirmpassword}</p>

                   </div>
                </div>

                 


           

        <div className="d-flex justify-content-center">
           <button className="btn btn-primary btn-sm mr-1"  onClick= {this.doSignIn}>SIGN UP</button>
             <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  {this.state.isSuccess  && <ModalHeader toggle={this.toggle} style={{ color: "green" }} ><b>{this.state.popuptitle}</b></ModalHeader>}
                  {!this.state.isSuccess && <ModalHeader toggle={this.toggle} style={{ color: "red" }} ><b>{this.state.popuptitle}</b></ModalHeader>}
                
                  {this.state.isSuccess 
                  ? <ModalBody><p>Hi {this.state.username},you have signed up successfully <a href="/r/login">click here to Login</a></p></ModalBody>
                  : <ModalBody><p>Hi {this.state.username},<b>{this.state.usermail}</b> email is already exist</p></ModalBody>}
                
                 <ModalFooter>
                    <Button color="primary"  onClick={this.toggle}>OK</Button>
                </ModalFooter>
              </Modal>
         </div>

           </form>

              


            </div>

          </div>

        </div>
     
  );
}
}
export default Signup;