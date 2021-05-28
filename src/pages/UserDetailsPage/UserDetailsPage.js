import React, { Component, StyleSheet } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import axios from 'axios';
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';


class UserDetailsPage extends Component {
  
 formatButton = (cell,row) =>
 {
  if(row.address)
  {
    return(
       <div>
       <button className="btn btn-primary" onClick={() => this.viewInfo(row.address)} ><i className="fa fa-home"></i></button>
       
       </div>
      )
  }
 }

 

  state =
  {
    Items:[],
    modal: false,
    currentRowSkill: [],
    
    newInfoModal:false,
    newInfoModal2:false,
    columns: [{
      dataField: 'userId',
      text: 'Sr no.',
      sort: true 
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true
    }, 
    {
      dataField: 'email',
      text: 'Email',
      sort: true
    },

     {
      dataField: 'phone',
      text: 'Phone',
      sort: true,

     },
     {
     dataField: 'address',
      text: 'Address',
      formatter:this.formatButton,
      sort: true
     },
      {
     dataField: 'anyFieldName',
      text: 'skill',
      formatter: (cell, row) => this.userFormatter(cell, row) ,
      sort: true
     },
    
    
     ]

  }
   constructor(props) {
    super(props)
    this.getItems();
     this.toggle = this.toggle.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toogleInfo2 = (row) => 

  {
    let skill = row.skills;
    this.setState({modal:true, currentRowSkill: skill})
  }
 

  toogleInfo()

  {
    this.setState({newInfoModal:true})
  }
 
  handleClose = () => {
    this.setState({newInfoModal:false})
      
  }
   handleClose2 = () => {
    this.setState({modal:false})
      
  }

   viewInfo(address)
  {
    this.setState({newInfoModal:!this.state.newInfoModal});
    localStorage.setItem("address",address);
    
  }

  userFormatter = (cell, row) => {
    if(row.skills && row.skills.length > 0) {
      return (
        <Button className="btn btn-primary" onClick={ () => this.toogleInfo2(row) }>Show</Button>
      );
    }
}


///{item.skill}
SearchArray = [];

getItems =  async  () => {
  try
  {
     let data =  await axios({
      method:'get',
      url:'http://localhost:8081/userController/getAllUser'
     }).then(({data})  =>data)
     console.log(data);
     this.SearchArray = data;
     this.setState({ Items:data});
  }
  catch(err){
    console.log(err);
  }
   

}
onChangeHandler(e)
{
  console.log(e.target.value);
  let newArray=this.SearchArray.filter((d) =>
  {
  
    return d.name.indexOf(e.target.value)  !== -1 ||d.email.indexOf(e.target.value)  !== -1 ||d.phone.indexOf(e.target.value)  !== -1 ||d.address.indexOf(e.target.value)  !== -1 ;
  });
  this.setState({Items: newArray})
}

renderSkills = (skills) => {
  let map = skills.map((item, index) => (
    <div key ={index}>{item.skill} with exp {item.experience}</div> 
  ));

  return map;
}


  render() {
    return (
     <div className="container-fluid"  >
     <div className="row  justify-content-center ">

        <div className="table-responsive">

           
      <div className="col-xs-4 col-sm-4 col-md-12">
       
       <div>
      
      <input type="text" value={this.state.value} onChange ={this.onChangeHandler.bind(this)}style={{ 'fontFamily': "Arial",'marginTop':'5%','marginLeft':'10%', width: "850px" ,'height':"50px"}} placeholder="  Search .."/>
       </div>


       <div className="table-responsive" style={{ 'fontFamily': "Arial",'marginTop':'2%'}}>
         <BootstrapTable 
        striped
        hover
        keyField='email' 
        data={ this.state.Items } 
        columns={ this.state.columns }
      
        noDataIndication="No Variable Meets Search Requirements"
          />
          
        
         
         <Modal isOpen = {this.state.newInfoModal} size = "lg">
         <ModalHeader>Address</ModalHeader>
         <ModalBody>
         
           {localStorage.getItem("address")}
         </ModalBody>
         <ModalFooter>
         <button className="btn btn-primary" onClick={this.handleClose}>Cancel</button>
         </ModalFooter>
         </Modal>


         <Modal isOpen={this.state.modal}>
          <ModalHeader>Skill Set</ModalHeader>
          <ModalBody>
          {this.renderSkills(this.state.currentRowSkill)}
          </ModalBody>
          <ModalFooter>
         
            <Button color='btn btn-primary' onClick={this.handleClose2}>Cancel</Button>
          </ModalFooter>
        </Modal>
      
        
      </div>
      </div>
      </div>
      </div>
      </div>
      );
  }

}

export default UserDetailsPage;