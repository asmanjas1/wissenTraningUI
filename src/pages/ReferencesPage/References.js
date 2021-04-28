import React from 'react';
import axios from 'axios';
import Select from 'react-select';

class References extends React.Component {
	 constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }
  async getOptions(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = res.data

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.name

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }

  componentDidMount(){
     // this.getOptions()
     this.setState({
      selectOptions:[
      {value:'java',label:'Java'},
      {value:'react',label:'React'},
      {value:'js',label:'Javascript'},
      ]

     });
  }



	 render() {
	 	return (
	 		 <div >
     
   <h1> References page</h1>
   <div className="container-fluid" >
          
          <div className="row  justify-content-center ">
              <div className="col-6 col-sm-4 col-md-3">
                 <p><b>Select Technology</b></p>
                  <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
              </div>
          </div>
          <hr/>
           <div class="jumbotron jumbotron-fluid">
                  <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>
                 

           </div>
       </div>
    </div>

	 		);
	 }
}
export default References;