import React,{ Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Quiz from'../Quiz/Quiz.js';


class Assessment extends React.Component {
  constructor(props){
    super(props)
    
  }

   

	 render() {
    
	 	return (
  <div>
	 <Quiz/>

  </div>

	 		);
	 }
}
export default Assessment;