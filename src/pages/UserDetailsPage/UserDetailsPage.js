

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
       <button class="btn btn-primary" onClick={() => this.viewInfo(row.address)} ><i class="fa fa-home"></i></button>
       
       </div>
      )
  }
 }

 

  state =
  {
    Items:[],
    modal: false,
    
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
     dataField: 'skills.skill',
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

  toogleInfo2()

  {
    this.setState({modal:true})
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
   
        return row["skills"] && row.skills.map((item, index) => {

        return (
            <div key={index} >

              <Button class="btn btn-primary" onClick={this.toogleInfo2.bind(this)}>show</Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          {item.skill}
          </ModalBody>
          <ModalFooter>
         
            <Button color='btn btn-primary' onClick={this.handleClose2}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
           )
      }
   ) 
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
        keyField='id' 
        data={ this.state.Items } 
        columns={ this.state.columns }
      
        noDataIndication="No Variable Meets Search Requirements"
          />
          
        
         <Button color = "#fff" onClick = {this.toogleInfo.bind(this)}></Button>
         <Modal isOpen = {this.state.newInfoModal} size = "lg">
         <ModalHeader>Address</ModalHeader>
         <ModalBody>
         
           {localStorage.getItem("address")}
         </ModalBody>
         <ModalFooter>
         <button class="btn btn-primary" onClick={this.handleClose}>Cancel</button>
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