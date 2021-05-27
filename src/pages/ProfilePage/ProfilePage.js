import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import {getUserObj} from '../AppUtills/AppUtills.js';


class ProfilePage extends React.Component {
	constructor(props){
    super(props)
    this.state = {
    		profileDetails:[],
    		selectedValue:"",
    	    values: [{ skill: null ,experience: null }],
    	    userdetails:[],
    	    user:[],
    	    skills:[],
    	    updatename:null,
    	    updatephone:null,
    	    updateaddress:null,
    	    updateskills:[{skill:null,experience:null}],
    	    updateskill:null,
    	    updateexp:null,
    	    isSkills:false,

    }

    this.handleSelect=this.handleSelect.bind(this);
    this.getUserDetails=this.getUserDetails.bind(this);
     this.upateUserDetails=this.upateUserDetails.bind(this);
     this.handleUpdatename=this.handleUpdatename.bind(this);
      this.handleUpdatePhone=this.handleUpdatePhone.bind(this);
       this.handleUpdateAddress=this.handleUpdateAddress.bind(this);
        //this.handleUpdateSkill=this.handleUpdateSkill.bind(this);
       // this.handleUpdateExp=this.handleUpdateExp.bind(this);


}
  
  

  componentDidMount()
  {
  	var user = getUserObj();
  	var userId=JSON.parse(user.userId);
  	this.getUserDetails(userId);
  	
  	
     this.setState({
     	profileDetails:[
     	{value:'Name',label:'Name'},
     	{value:'Phone',label:'Phone Number'},
     	{value:'Address',label:'Address'},
     	{value:'Skills',label:'Skills'}],
     	user:user,
     	

     }
     	)

  }

  async getUserDetails(uderid){
  //	const id=this.state.user.userId;
    const res = await axios.get('http://localhost:8081/userController/getUser/'+uderid)
    const data = res.data
   
   
    this.setState({userdetails: data,skills:data.skills})

  }

  upateUserDetails()

{
	let user={};

	if(this.state.selectedValue=="Name")
	{
		 user={'userId':this.state.userdetails.userId,'name':this.state.updatename};
	}
	if(this.state.selectedValue=="Phone")
	{
		 user={'userId':this.state.userdetails.userId,'phone':this.state.updatephone};
	}
	if(this.state.selectedValue=="Address")
	{
		 user={'userId':this.state.userdetails.userId,'address':this.state.updateaddress};
	}
	if(this.state.selectedValue=="Skills")
	{
		 user={'userId':this.state.userdetails.userId,'skills':this.state.updateskills};
	}
	
			

			let headers = {
			'Accept': 'application/json'
			 };

			 let config = {
			headers: headers
			};
			let url = "http://localhost:8081/userController/updateUser";
		 axios.put(url, user, config)
			.then(response => {
				var user = getUserObj();
  				var userId=JSON.parse(user.userId);
  				this.getUserDetails(userId);
  	
				// this.setState({popuptitle:"Success!",isSuccess:true})
				// this.toggle()
				console.log(response);	
			})
			.catch(error => {
				// 	this.setState({popuptitle:"Error!",
				// 		popupmessage:error.response.data.message,
				// 		isSuccess:false,
				// 	})
				// this.toggle()
				console.log(error.response.data.message);
			});	

		

	

}

handleUpdatename(e)
{
	this.setState({updatename:e.target.value})
	console.log(e.target.value);
	
}

handleUpdatePhone(e)
{
	this.setState({updatephone:e.target.value})
}
handleUpdateAddress(e)
{
	
	this.setState({updateaddress:e.target.value})
}
// handleUpdateSkill(i,e)
// {
// 	this.setState({updateskill:e.target.value})
// }
// handleUpdateExp(i,e)
// {

// 	this.setState({updateexp:e.target.value,updateskills:[{skill:this.state.updateskill,experience:e.target.value}]})
// }
handleSubmitSkills()
{
	this.setState({isSkills:true})
	this.upateUserDetails();

}

  handleChangeSkill(i, e) {
  	//this.setState({updateskill:e.target.value})
    const updateskills = [...this.state.updateskills];
    updateskills[i].skill = e.target.value;

    this.setState({ updateskills });
  }
   handleChangeExperience(i, e) {
   	const updateskills=[...this.state.updateskills];
	
	updateskills[i].experience=e.target.value;
    // let updateskills = [...this.state.updateskills];
    // updateskills[i].experience = event.target.value;

    this.setState({ updateskills });
  }

  addClick() {
    this.setState(prevState => ({
    // values: [...prevState.values, { skill: null,experience:null }],
      
     updateskills:[...prevState.updateskills,{skill:null,experience:null}],
    }));
   // this.setState({values:this.state.updateskills})
  }

   removeClick(i) {
    let updateskills = [...this.state.updateskills]; 
    updateskills.splice(i, 1);
    this.setState({ updateskills });
  }

 





  handleSelect(e)
  {
  		this.setState({selectedValue:e.value})
  		
  }
 
  
  render() {
  	console.log(this.state.user);
  	console.log(this.state.skills);
  	console.log(this.state.userdetails.address);
  	
  	
    return (
   <div >
      	<div className="container-fluid">
      	
      		<div className="row justify-content-center">
      			<h2>Profile Details</h2>
      	    </div>

      		<br/>

      		<div className="row justify-content-center">
      			<div className="col-8 col-sm-4 col-md-3">
      				<b>Name:</b>
      				<p> {this.state.userdetails.name} </p>
      				<hr/>
       			</div>

      			<div className="col-8 col-sm-4 col-md-3">
      				<b>Email:</b>
      				<p> {this.state.userdetails.email}</p>
      				<hr/>
      			</div>
      		</div>

      		<br/>

      		<div className="row justify-content-center">
      			<div className="col-8 col-sm-4 col-md-3">
      				<b>Phone Number:</b>
      				<p>{this.state.userdetails.phone} </p>
      				<hr/>
       			</div>

       			<div className="col-8 col-sm-4 col-md-3">
       				<b>Address:</b>

      				<p> {this.state.userdetails.address} </p>
      				<hr/>
       			</div>

      		</div>

      		<div className="row justify-content-center">
      			
      			<div className="col-4 col-sm-4 col-md-6">
      				<b>Skills:</b>
      				{
      					this.state.skills.map(skill=>(
      					<p> {skill.skill} {skill.experience}</p>
      					))
      				}
      				
      				
       			</div>
       		</div>

       		<hr/>

   	    </div>

   	    <div>
       			<div className="row justify-content-center  ">
       				<h2>Update Profile</h2>
       			</div>

       			<br/>

       			<div className="row  justify-content-center ">
       				<div className="col-6 col-sm-4 col-md-3">
                	 	<spam><b>Select to update</b></spam>
                 	 	<Select options={this.state.profileDetails}  onChange={this.handleSelect}  />
              		</div>
              	</div>

              	<br/>

              	{this.state.selectedValue==="Name" &&
              	<div className="row left justify-content-center jumbotron jumbotron-fluid" >
       				<div className="col-6 col-sm-4 col-md-3" >
                	 	<label><b>Update name</b></label>
                  	 	<input type="text"  name="Name" placeholder="Enter name"  className="form-control"  onChange={ this.handleUpdatename}  style={{textAlign:"center"}} />
                 	 </div>
                 	<div className="col-6 col-sm-4 col-md-3">
                 	 		<spam><pre> </pre></spam>
                 	        <button className="btn btn-primary btn-sm " onClick={this.upateUserDetails} >Submit</button>
                 	</div> 
              	</div>}
              	

              	{this.state.selectedValue==="Phone" &&
              	<div className="row justify-content-center jumbotron jumbotron-fluid">
       				<div className="col-6 col-sm-4 col-md-3">
                	 	<label><b>Update Phone</b></label>
                  	 	<input type="text"  name="Name" placeholder="Enter phone number" className="form-control" style={{textAlign:"center"}} onChange={this.handleUpdatePhone}/>
                 	 	 
              		</div>
              		<div className="col-6 col-sm-4 col-md-3">
                 	 		<spam><pre> </pre></spam>
                 	        <button className="btn btn-primary btn-sm " onClick={this.upateUserDetails}>Submit</button>
                 	</div> 
              	</div>}

              	{this.state.selectedValue==="Address" &&
              	<div className="row justify-content-center jumbotron jumbotron-fluid">
       				<div className="col-6 col-sm-4 col-md-3">
                	 	<label><b>Update Address</b></label>
                  	 	<input type="text"  name="Name" placeholder="Enter address" className="form-control" style={{textAlign:"center"}} onChange={e => this.handleUpdateAddress(e)}/>
                 	 	 
              		</div>
              		<div className="col-6 col-sm-4 col-md-3">
                 	 		<spam><pre> </pre></spam>
                 	        <button className="btn btn-primary btn-sm " onClick= {this.upateUserDetails} >Submit</button>
                 	</div> 
              	</div>}

            {this.state.selectedValue==="Skills" &&
              	<div className="jumbotron jumbotron-fluid">
              		{this.state.updateskills.map((el, i) => (
              		
			  	 	<div key={i}>
              			
              			<br/>
              			<div className="row justify-content-center  ">
              				
       						<div className="col-6 col-sm-4 col-md-3">
                	 			<label><b>Update Skills</b></label>
                  	 			<input type="text"  name="skill" placeholder="Add skill" className="form-control" style={{textAlign:"center"}} onChange={e =>this.handleChangeSkill(i,e)}/>
                 			</div>
                 			<br/>
                 	 		<div className="col-6 col-sm-4 col-md-3">
                 	 			<label><b>Total Experience</b></label>
                 	 			<input type="text"  name="Experience" placeholder="Add Experience" className="form-control" style={{textAlign:"center"}} onChange={e =>this.handleChangeExperience(i,e)}/>
                 	 		</div>
                 	 		<div className="col-6 col-sm-4 col-md-3">
                 	 			 <spam><pre> </pre></spam>                	 			 
                 	 	        { i>0 &&  <button className="btn btn-primary btn-sm "  onClick={() => this.removeClick(i)}>Remove</button>}

			               	</div>

			    		</div>

			   		</div> 
			   		

			   		))}
			       			<br/><div className="row justify-content-center">
              					 <button className="btn btn-primary btn-sm mr-1"  onClick={() => this.addClick()}>Add</button>
              					 <button className="btn btn-primary btn-sm mr-1" onClick={this.upateUserDetails} >Submit</button>

              				</div>
			      			 
               </div>
           }
       	</div>

   </div>
    
    );
  }
  
 
}

export default ProfilePage;

