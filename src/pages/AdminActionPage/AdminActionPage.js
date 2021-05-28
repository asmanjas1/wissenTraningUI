import React,{ Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import '../AdminActionPage/AdminActionPage.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

class AdminAction extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     
      id: "",
      name: '',
      selelctTechData: [],
      selectSections:[],
      selectedSection:"",
      selectedTechnology:"",
      reffTitle:"",
      reffLink:"",
      question:"",
      option1:"",
      option2:"",
      option3:"",
      option4:"",
      answer:"",
      selectedQuestionTechnology:"",
      isQuestion:false,
      isReferences:false,
      isSelectedSection:false,
      isSelectedTechnology:false,
      fields: {},
      errors: {},
      modal: false,
      popupmessage:"",
      popuptitle:"",
      isSuccess:true,
                        
 
    }
    this.handleChangeTitle=this.handleChangeTitle.bind(this);
    this.handleChangeLink=this.handleChangeLink.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.handleChangeQuestion=this.handleChangeQuestion.bind(this);
    this.handleChangeOption1=this.handleChangeOption1.bind(this);
    this.handleChangeOption2=this.handleChangeOption2.bind(this);
    this.handleChangeOption3=this.handleChangeOption3.bind(this);
    this.handleChangeOption4=this.handleChangeOption4.bind(this);
    this.handleChangeAnswer=this.handleChangeAnswer.bind(this);
    this.toggle = this.toggle.bind(this);


  }

   

    async getTechnologies(){
    const res = await axios.get('http://localhost:8081/userController/getAllTech')
    const data = res.data
    console.log(data);
    const options =  data.map(d => ({
      "value" : d,
      "label" : d,

    }))

    this.setState({selelctTechData: options})

  }

    componentDidMount() {  

      this.setState({
      selectSections:[
      {value:'References',label:'Add References'},
      {value:'Question',label:'Add Question and Answers'},
      ]
     });

     this.getTechnologies()
     }  


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


   handleSections(e)

  {
 
    this.setState({selectedSection:e.value});
      
    this.setState({isSelectedSection:true});
        if(e.value.match("Question"))
        {
    
            this.setState({isQuestion:true,isReferences:false});
        }
    
     if(e.value.match("References"))
    {
      
       this.setState({isReferences:true,isQuestion:false});
    }
 
     }



  handleChangeTitle(e)
  {
     this.setState({reffTitle:e.target.value})
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({fields});
  }
  handleChangeLink(e)
  {
    this.setState({reffLink:e.target.value})
     let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({fields});
  }
   handleChangeQuestion(e)
  {
    this.setState({question:e.target.value})
     let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({fields});
  }
  handleChangeOption1(e)
  {
    this.setState({option1:e.target.value})
     let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({fields});
  }
   handleChangeOption2(e)
  {
    this.setState({option2:e.target.value})
     let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({fields});
  }
   handleChangeOption3(e)
  {
    this.setState({option3:e.target.value})
     let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({fields});
  }
   handleChangeOption4(e)
  {
    this.setState({option4:e.target.value})
     let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({fields});
  }
   handleChangeAnswer(e)
  {
    this.setState({answer:e.target.value})
     let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({fields});
  }
  
  handleTechnology(e)
  {
    this.setState({selectedTechnology:e.value});
    this.setState({isSelectedTechnology:true});
  }


   validateReferencesForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid =true;
    //var Userfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (!fields["title"]) {
      formIsValid = false;
      errors["title"] = "*Please add references title";
    }
    
    if (!fields["link"]) {
      formIsValid = false;
      errors["link"] = "*Please add references link";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
    

  }


   validateQuestionansAnswerForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid =true;
    //var Userfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (!fields["question"]) {
      formIsValid = false;
      errors["question"] = "*Please add question.";
    }
    
   
    if (!fields["Option1"]) {
      formIsValid = false;
      errors["Option1"] = "*Please add Option1.";
    }

    if (!fields["Option2"]) {
      formIsValid = false;
      errors["Option2"] = "*Please add Option2.";
    }

    if (!fields["Option3"]) {
      formIsValid = false;
      errors["Option3"] = "*Please add Option3.";
    }

    if (!fields["Option4"]) {
      formIsValid = false;
      errors["Option4"] = "*Please add Option4.";
    }

    if (!fields["answer"]) {
      formIsValid = false;
      errors["answer"] = "*Please add answer.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
    

  }


  onSubmit(e)
  {
   
      if(this.state.selectedSection.match("References"))
      {
         if (this.validateReferencesForm())
         {


     let reff = {
      'title': this.state.reffTitle,
      'link': this.state.reffLink,
      'techName': this.state.selectedTechnology,
       }
         console.log(reff);
       let headers = {
      'Accept': 'application/json'
       };

        let config = {
      headers: headers
      };

       let url = "http://localhost:8081/userController/saveReference";

       axios.post(url, reff, config)

          .then(response => {
          this.setState({popuptitle:"Success!",isSuccess:true})
          this.toggle()   
          console.log(response);        
          })

         .catch(error => {
          this.setState({popuptitle:"Error!",
          popupmessage:"Failed to add",isSuccess:false})
          this.toggle()
          console.log(error.response);
              });
             }
           }

      if(this.state.selectedSection.match("Question"))
      {
         if (this.validateQuestionansAnswerForm())
         {

        let qtn = {
      'question': this.state.question,
      'option1': this.state.option1,
      'option2': this.state.option2,
      'option3': this.state.option3,
      'option4': this.state.option4,
      'answer': this.state.answer,
      'techName': this.state.selectedTechnology,
       }
         console.log(qtn);
       let headers = {
      'Accept': 'application/json'
       };

        let config = {
      headers: headers
      };

       let url = "http://localhost:8081/userController/saveQuiz";

       axios.post(url, qtn, config)

      .then(response => { 
      this.setState({popuptitle:"Success!",isSuccess:true})
        this.toggle()  
         console.log(response);        
          })

         .catch(error => {
           this.setState({popuptitle:"Error!",
            popupmessage:"Failed to add",
            isSuccess:false,
          })
        
         this.toggle()
          console.log(error.response);
           });
      }
    }
    
  }


render() {
    
    return (
   <div>
      <div className="container-fluid" >
          <div className="row  justify-content-center ">

              <div className="col-6 col-sm-4 col-md-3">
                 <p><b>Select a Section</b></p>
                   <Select options={this.state.selectSections}  onChange={this.handleSections.bind(this)} />
               </div>

              <div className="col-6 col-sm-4 col-md-3">
                 <p><b>Select Technology</b></p>
                  <Select options={this.state.selelctTechData}  onChange={this.handleTechnology.bind(this)}  />
              </div>
         </div>

          <hr/>

          { this.state.isReferences && this.state.isSelectedSection && this.state.isSelectedTechnology && 
           <div className="jumbotron jumbotron-fluid">
                <div className="row  justify-content-center ">
                    <div className="col-6 col-sm-4 col-md-6 border">
                          <h2>Add Reference</h2>
                          <br/>
                          <label>References Title</label>
                           <input type="text" name="title"  onChange={this.handleChangeTitle} className="form-control" placeholder="Add References Title " style={{ textAlign: "center" }} id="title" /> 
                            <p data-toggle="tooltip" data-placement="top" title="Title name should be relate to link you provide  " style={{ color: "red" }}>{this.state.errors.title}</p>

                           <br/>
                            <label>References Link</label>
                             <input type="text" name="link"  onChange={this.handleChangeLink} className="form-control" placeholder="Add References Link " style={{ textAlign: "center" }} id="link" /> 
                              <p data-toggle="tooltip" data-placement="top" title="Ex: https://www.javalearn.com " style={{ color: "red" }}>{this.state.errors.link}</p>

                            <br/>
                          <div className="row justify-content-center ">
                          <button className="btn btn-primary btn-sm mr-1"  onClick= {this.onSubmit}>SUBMIT</button>
                              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                  {this.state.isSuccess  && <ModalHeader toggle={this.toggle} style={{ color: "green" }} ><b>{this.state.popuptitle}</b></ModalHeader>}
                                  {!this.state.isSuccess && <ModalHeader toggle={this.toggle} style={{ color: "red" }} ><b>{this.state.popuptitle}</b></ModalHeader>}
                
                                   {this.state.isSuccess 
                                          ? <ModalBody><p><b>{this.state.reffTitle}</b> saved successfully</p></ModalBody>
                                          : <ModalBody><p><b>{this.state.popupmessage}</b></p></ModalBody>}
                                  <ModalFooter>
                                     <Button color="primary"  onClick={this.toggle}>OK</Button>
                                  </ModalFooter>
                              </Modal>
                          </div>
                     </div>
                 </div>            
             </div>
           }



           { this.state.isQuestion && this.state.isSelectedSection && this.state.isSelectedTechnology && 
           <div className="jumbotron jumbotron-fluid">
                <div className="row  justify-content-center ">
                    <div className="col-6 col-sm-4 col-md-6 border">
                          <h2>Add Question and Answer</h2>
                          <br/>
                          <label> Question</label>
                           <input type="text" name="question"  onChange={this.handleChangeQuestion} className="form-control" placeholder="Add Question " style={{ textAlign: "center" }} id="question" /> 
                             <p data-toggle="tooltip" data-placement="top"  style={{ color: "red" }}>{this.state.errors.question}</p>
                           <br/>
                            <label>Option 1</label>
                             <input type="text" name="Option1"  onChange={this.handleChangeOption1} className="form-control" placeholder="Add Option 1 " style={{ textAlign: "center" }} id="Option1" /> 
                             <p data-toggle="tooltip" data-placement="top"  style={{ color: "red" }}>{this.state.errors.Option1}</p>

                            <br/>
                            <label>Option 2</label>
                           <input type="text" name="Option2"  onChange={this.handleChangeOption2} className="form-control" placeholder="Add Option 2 " style={{ textAlign: "center" }} id="Option2" /> 
                            <p data-toggle="tooltip" data-placement="top"  style={{ color: "red" }}>{this.state.errors.Option2}</p>

                           <br/>
                           <label>Option 3</label>
                           <input type="text" name="Option3"  onChange={this.handleChangeOption3} className="form-control" placeholder="Add Option 3 " style={{ textAlign: "center" }} id="Option3" /> 
                           <p data-toggle="tooltip" data-placement="top"  style={{ color: "red" }}>{this.state.errors.Option3}</p>

                           <br/>
                           <label>Option 4</label>
                           <input type="text" name="Option4"  onChange={this.handleChangeOption4} className="form-control" placeholder="Add Option 4 " style={{ textAlign: "center" }} id="Option4" /> 
                            <p data-toggle="tooltip" data-placement="top"  style={{ color: "red" }}>{this.state.errors.Option4}</p>

                           <br/>
                           <label>Answer</label>
                           <input type="text" name="answer"  onChange={this.handleChangeAnswer} className="form-control" placeholder="Add Answer " style={{ textAlign: "center" }} id="answer" /> 
                            <p data-toggle="tooltip" data-placement="top"  style={{ color: "red" }}>{this.state.errors.answer}</p>

                           <br/>
                           <div className="row justify-content-center ">
                            <button className="btn btn-primary btn-sm mr-1"  onClick= {this.onSubmit}>SUBMIT</button>
                              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                  {this.state.isSuccess  && <ModalHeader toggle={this.toggle} style={{ color: "green" }} ><b>{this.state.popuptitle}</b></ModalHeader>}
                                  {!this.state.isSuccess && <ModalHeader toggle={this.toggle} style={{ color: "red" }} ><b>{this.state.popuptitle}</b></ModalHeader>}
                
                                   {this.state.isSuccess 
                                          ? <ModalBody><p><b>{this.state.question}</b> saved successfully</p></ModalBody>
                                          : <ModalBody><p><b>{this.state.popupmessage}</b></p></ModalBody>}
                                  <ModalFooter>
                                     <Button color="primary"  onClick={this.toggle}>OK</Button>
                                  </ModalFooter>
                              </Modal>
                          </div>
                     </div>
                 </div>            
           </div>
           }

       </div>

   </div>

      );
   }
}
export default AdminAction;