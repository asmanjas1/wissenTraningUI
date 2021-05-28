import React, { Component } from 'react';

import axios from 'axios';
import Tooltip from "react-simple-tooltip";

class References extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      refs:[],
      isLoading: false,
      isError: false,
      search:''
    }
  }
  async componentDidMount() {
    this.setState({ isLoading: true })
      const response = await axios.get('http://localhost:8081/userController/getAllReference')
     
      .then(res => {
         const refs = res.data;
        console.log(res.data);
          this.setState({ refs, isLoading: false })
      })
       .catch(error => {
         this.setState({ isError: true, isLoading: false })

          })
   
  }
renderTableHeader = () => {
    return Object.keys(this.state.refs[0]).map(attr => <th data-toggle="tooltip" style={{'textAlign': "center","borderWidth":"5px", 'borderColor':"#aaaaaa",'color':'DodgerBlue','fontFamily': "Times New Roman", 'borderStyle':'solid'}} key={attr}>{attr.toUpperCase()}</th>)
  }

  

  renderTableRows = () => {
    let filteredUser=this.state.refs.filter((ref)=> {
    return ref.techName.indexOf(this.state.search) !== -1 || ref.title.indexOf(this.state.search) !== -1 ||ref.link.indexOf(this.state.search) !== -1 });
    return filteredUser.map(ref => {
      return (
        <tr style={{"borderWidth":"5px", 'borderColor':"#aaaaaa", 'borderStyle':'solid','paddingTop': '30px',}}key={ref.id}>
          <td data-toggle="tooltip" title={ref.id} style={{'textAlign': "center","borderWidth":"3px", 'borderColor':"#aaaaaa",'fontFamily': "Arial", 'borderStyle':'solid','padding':'8px'}}>{ref.id}</td>
          <td data-toggle="tooltip" title={ref.techName} style={{'textAlign': "center","borderWidth":"3px", 'borderColor':"#aaaaaa",'fontFamily': "Arial", 'borderStyle':'solid','padding':'8px'}}>{ref.techName}</td>
          <td data-toggle="tooltip" title={ref.title} style={{ 'textAlign': "center","borderWidth":"3px", 'borderColor':"#aaaaaa", 'fontFamily': "Arial",'borderStyle':'solid','padding':'8px'}}>{ref.title}</td>
          <td data-toggle="tooltip" title={ref.link} style={{'textAlign': "center","borderWidth":"3px", 'borderColor':"#aaaaaa",'fontFamily': "Arial", 'borderStyle':'solid','padding':'8px'}}>{ref.link}</td>
        </tr>
     
      )
    })
  }
  updateSearch = (event) => {
    this.setState({search: event.target.value});
  }


  render() {

    const { refs, isLoading, isError } = this.state
    
    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>{this.state.error}</div>
    }
   


    return refs.length > 0
      ? (
      <div className="container-fluid" >
          <div className="row  justify-content-center ">
            <div className="col-6 col-sm-4 ">
        
        <div>
         <i className="fa fa-search" aria-hidden="true"> </i>
         <input type="text" style={{ 'fontFamily': "Arial",'marginTop':'10%', width: "400px"}} placeholder="  Search .." value={this.state.search}
         onChange={this.updateSearch.bind(this)}/>
        </div>
        

        
         
        <table  className=" table-responsive table table-striped table-bordered table table-hover" style={{ 'marginTop':'20%'}} >
         
          <thead>
           <tr >
              {this.renderTableHeader()}
            </tr>
          </thead>
          
           
        
          <tbody>
            {this.renderTableRows()}
          </tbody>
           

        </table>
     
        </div>
        </div>
        </div>
      ) : (
        <div>
          No References.
      </div>
      )
  }
}
export default References;
