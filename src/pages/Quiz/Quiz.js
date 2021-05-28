import React, { Component } from 'react'
import './Quiz.css';
import axios from 'axios';
import Select from 'react-select';

class Quiz extends React.Component {
    constructor(props){
    super(props)
   this. state = {
    userAnswer:[],
     
    currentIndex:0,  
    options: [],       
    quizEnd: false,
    score: 0,
    Nxtbtndisabled: false,
    prevoiusbtn:true,
    submitbtndisabled:true,
    resetbtndisabled:true,
    QuizData:[],
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    answer:"",
    techName:"",
    isDataAvl:false,
    submitedAwr:[],
   
   
    option:[],

   

    selectOptions : [],
      id: "",
      name: "",
      selelctTechData:[],
      selectedTechnology:"",
      isSelectedTechnology:false,
      
   
    
    
}
  }

   componentDidMount(){
       
        this.getTechnologies();
        
    }

    
    componentDidUpdate(prevProps, prevState){
        const{currentIndex,QuizData} = this.state;
        if(this.state.currentIndex !== prevState.currentIndex){
            this.setState(() => {
                return {
                resetbtndisabled:false,
                submitbtndisabled:true,
                question: QuizData[currentIndex].question,
                option1 : QuizData[currentIndex].option1,
                option2 : QuizData[currentIndex].option2,
                option3 : QuizData[currentIndex].option3,
                option4 : QuizData[currentIndex].option4,
                answer: QuizData[currentIndex].answer, 
                 techName: QuizData[currentIndex].techName            
                }
            });

        }
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

   handleTechnology(e)
  {
    this.setState({selectedTechnology:e.value,isSelectedTechnology:true, quizEnd: false,currentIndex:0, score:0,userAnswer:[],submitedAwr:[]});

    this.getQuiz(e.value);

    
  }
    async getQuiz(techname){
   
    const res = await axios.get('http://localhost:8081/userController/getQuiz/'+techname)
    const quizdata = res.data
    this.setState({QuizData: quizdata})
    console.log(quizdata);
    this.loadQuiz();
    // const {currentIndex,QuizData} = this.state 
    //  this.setState(() => {
    //         return {
    //             question: QuizData[currentIndex].question,
    //             option1 : QuizData[currentIndex].option1,
    //             option2 : QuizData[currentIndex].option2,
    //             option3 : QuizData[currentIndex].option3,
    //             option4 : QuizData[currentIndex].option4,
    //             answer: QuizData[currentIndex].answer, 
    //              techName: QuizData[currentIndex].techName          
    //         }
    //     }
    //     )


    // const options =  quizdata.map(d => ({
    //   "question" : d.question,
    //   "option1" : d.option1,
    //    "option2" : d.option2,
    //     "option3" : d.option3,
    //      "option4" : d.option4,
    //       "answer" : d.answer,
    //        "techName" :this.props.selectedTechnology,

    // }))

   

  }

     
   


    
    loadQuiz = () => {

        const {currentIndex,QuizData,userAnswer} = this.state 
         
       
        if(QuizData && QuizData.length>0 )
        {
        this.setState(() => {
            return {
                isDataAvl:true,
                 
               
                question: QuizData[currentIndex].question,
                option1 : QuizData[currentIndex].option1,
                option2 : QuizData[currentIndex].option2,
                option3 : QuizData[currentIndex].option3,
                option4 : QuizData[currentIndex].option4,
                answer:   QuizData[currentIndex].answer, 
                techName: QuizData[currentIndex].techName          
            }
        }
        )
    }
    else
    {
        this.setState({isDataAvl:false})
    }
    }

    
    nextQuestionHander=() => {

          const radioBtn=document.querySelectorAll(
            "input[type='radio'][name='option']"
            );
          radioBtn.forEach((radioBtn)=>{
            if(radioBtn.checked===true)
              radioBtn.checked=false;
          });


       
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            isOption1Checked:true

            //selectedTechnology:null,

           
        })

       
        
    }

    onSubmit= (e)=>{
         const { answer, score,currentIndex,userAnswer} = this.state
          
        
        let array=userAnswer.slice(0);
           
          this.setState({ submitbtndisabled :true,resetbtndisabled:false, submitedAwr:array})
           

         if(this.state.userAnswer[currentIndex] === answer){
            this.setState({
                score: score + 1,
               
               
            })


        }
        else
        {
            this.setState({
                score: score - 1,
               
            })
        }
        

    }

    
     prevoiusquestion= ()=>{
         const {userAnswer, answer, score,currentIndex} = this.state
         if(userAnswer[currentIndex]!==null)
         {

         }
        this.setState({
            currentIndex: this.state.currentIndex - 1,
            resetbtndisabled:true
        })
        
             this.setState({ submitbtndisabled:true})
        


    }
   
   
   

   
    checkAnswer = answer => {
         const {userAnswer,score,currentIndex} = this.state
        let array=userAnswer;
        array[currentIndex]=answer;
             this.setState({
        
            userAnswer:array,
            Nxtbtndisabled:false,
            submitbtndisabled:false,
            resetbtndisabled:false,



        })
            
        console.log(this.state.submitedAwr);
        

    }

    // handleOption1(name)
    // {
    //     const radioBtn=document.querySelectorAll(
    //         "input[type='radio'][name='"+ name +"']"
    //         );
    //       radioBtn.forEach((radioBtn)=>{
    //         if(radioBtn.checked===true)
    //           radioBtn.checked=false;
    //       });
    // }

   
    finishHandler =() => {
         const {QuizData} = this.state
        if(this.state.currentIndex === QuizData.length -1){
            console.log(this.state.currentIndex);
            this.setState({
                quizEnd:true,
                currentIndex:0,
               


            })
        }

    }

    render() {

       const {question, options, currentIndex, userAnswer, quizEnd,QuizData,userSubmitedAnswer} = this.state //get the current state       
       
         
               
        return (

    <div>
        <div className="container-fluid" >
          <div className="row  justify-content-center ">
              <div className="col-6 col-sm-4 col-md-3">
                 <p><b>Select Technology</b></p>
                  <Select options={this.state.selelctTechData} onChange={this.handleTechnology.bind(this)}  />
              </div>

          </div>
          <hr/>

          {this.state.isSelectedTechnology && !this.state.quizEnd && this.state.isDataAvl && <div className="jumbotron jumbotron-fluid">

               <div className="row  justify-content-center ">
                       <div className="col-8 col-md-6 ">

                <div className="qtns">
               <h2>{question}</h2>
                
                <span>{`Question ${currentIndex+1} of ${this.state.QuizData.length}`}</span>
                
               
              <p className={"options"}>a. <input  type="radio"  name="option"    value="a"  onChange= {(e) => this.checkAnswer(e.target.value)} /> {this.state.option1}</p>
              <p className={"options"}>b. <input type="radio" name="option"    value="b" onChange= {(e) => this.checkAnswer(e.target.value)}  /> {this.state.option2}</p>
              <p className={"options"}>c. <input type="radio" name="option"    value="c" onChange= {(e) => this.checkAnswer(e.target.value)}  /> {this.state.option3}</p>
              <p className={"options"}>d. <input type="radio" name="option"    value="d" onChange= {(e) => this.checkAnswer(e.target.value)}  /> {this.state.option4}</p>

                    
            {this.state.submitedAwr[currentIndex] && <p>You have submited option "<b>{this.state.submitedAwr[currentIndex]}</b>" as an answer for this question</p>
              }  
                 {currentIndex >=1 &&  
                // Next button only displays if the above is true
                <button 
                    className="btn btn-primary btn-sm mr-1" 
                   
                    onClick = {this.prevoiusquestion}
                 >Previous Question</button>
                }

               
                <button 
                    className="btn btn-primary btn-sm mr-1" 
                    disabled = {this.state.submitbtndisabled}
                    onClick = {this.onSubmit}
                 >Submit Answer</button>
                


                

               
                
               

                {currentIndex <this.state. QuizData.length -1 &&   
                // Next button only displays if the above is true
                <button 
                    className="btn btn-primary btn-sm mr-1" 
                    disabled = {this.state.Nxtbtndisabled}
                    onClick = {this.nextQuestionHander}
                   

                 >Next Question</button>
                }

                 {currentIndex ===this.state. QuizData.length -1 &&
                    <button
                    className="btn btn-primary btn-sm mr-1"
                    disabled = {this.state.disabled}
                    onClick = {this.finishHandler}
                    >Finish</button>
                 }
                  {this.state.quizEnd && this.state.isDataAvl && <div>
                    <h1> Final score is {this.state.score} / {this.state. QuizData.length} points</h1>
                    <p>The correct Answers for the quiz are</p>
                    <ul>
                        {this.state.QuizData.map((item, index) => (
                            <li className='options'
                                key={index}>
                                    {item.answer}

                            </li>
                     ))}
                    </ul>
                </div>
            }
            </div>
           
                     
                      
                    </div>
                </div>
           </div>



         }
         {!this.state.isDataAvl && this.state.isSelectedTechnology &&
            <h2>No Q&A available contact Admin</h2>

         }

            {this.state.quizEnd && this.state.isDataAvl && <div className="jumbotron jumbotron-fluid">
                    <div className="row  justify-content-center ">
                    <div className="col-8 col-md-6 ">
                    <h1> Final score is {this.state.score} / {this.state. QuizData.length} points</h1>
                    <p>The correct Answers for the quiz are</p>
                    <ul>
                        {this.state.QuizData.map((item, index) => (
                            <li className='options'
                                key={index}>
                                    {item.answer}
                            </li>
                     ))}
                    </ul>
                    </div>
                    </div>
                </div>
            }
           
     </div>

  </div>



        )
    }
}

export default Quiz