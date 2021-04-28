import React, { Component } from "react";
import {saveLocals1,saveLocals2}  from '../AppUtills/AppUtills';


class AdminAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue1: "",
      selectValue2:""
    }

    
  }

 

  submit() {
    
       

     console.log(this.state.selectValue1);
     console.log(this.state.selectValue2);
     saveLocals1({s1: this.state.selectValue1 });
     saveLocals2({s2: this.state.selectValue2 });

    }
  render() {
    return (
       <div className="container-fluid">
    <div className="container" >
    <div className="row justify-content-center">
       <div className="row">
                    <div className="col-msm-4.col-lg-6">
                            <div className="form-row">
                                <div className="form-group col-msm-4.col-lg-6">
                                    <label>Select a Section to Edit :</label>
                                    <select className="form-control" name="Section" onChange={(event) => { this.setState({ selectValue1: event.target.value }) }} >
                                        <option selected>Select a Section</option>
                                        <option value="Test">Test</option>
                                        <option value="Reference">Reference</option> 
                                     </select>
                                </div>
                            </div>


                              <div className="form-row">
                                <div className="form-group col-msm-4.col-lg-6">
                                    <label>Select a Action:</label>
                                    <select className="form-control" name="Section" onChange={(event) => { this.setState({ selectValue2: event.target.value }) }}  >
                                        <option selected>Select a Action</option>
                                        <option value="Edit">Edit</option>
                                        <option value="Add New">Add New</option>
                                    
                                    </select>
                                </div>
                                     
                            </div> 
                          
                        
                    </div>


                </div>
                
                </div>
                 <button class="btn btn-primary btn-sm ml-7" onClick={() => this.submit()}>Click</button>
                 </div>
                 </div>
            
    );
  }
}


export default AdminAction;