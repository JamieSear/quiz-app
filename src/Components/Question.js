import React, { Component } from 'react'
import { data, nextQuestion, addPlayerScore1, addPlayerScore2, addPlayerScore3, addPlayerScore4, addPlayerScore5 } from '../Actions/Actions.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Question extends Component {
    constructor() {
        super();
        this.state = {
            currentPlayer: 'Player 1',
            buttonPressed: false
        };

    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.scoreChecker = this.scoreChecker.bind(this);
}
    componentDidMount = () => {document.getElementById('nextq').style = "visibility: hidden"; document.getElementById('correctAnswerh1').style = "visibility: hidden"}
     
    showNextButton = () => {
        
            // document.getElementById(`answerBtn${i}`).setAttribute= ("visibility: hidden")
            document.getElementById('nextq').style = "visibility: visible"
            document.getElementById('correctAnswerh1').style = "visibility: visible"
        
    }

    scoreChecker = (selectedAnswer, player) => {
        // document.querySelectorAll('answerBtn').style = "visibility: hidden"
        for (let i = 1; i < 5; i++) {
            console.log(document.getElementById(`answerBtn${i}`))
            document.getElementById(`answerBtn${i}`).style= "visibility: hidden"
            console.log(`The correct answer was: ${this.props.question.correct_answer}`)
            // if (this.state.buttonPressed) {
            //     this.setState({buttonPressed: true})
            // }
        }
       
        
        
            if (player === `Player 1`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore1()
                    console.log(`Player 1's score is ${this.props.players[0].score}`)
                }        
            } else if (player === `Player 2`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore2()
                    console.log(`Player 2's score is ${this.props.players[1].score}`)
                }
            } else if (player === `Player 3`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore3()
                    console.log(`Player 3's score is ${this.props.players[2].score}`)   
                } 
            } else if (player === `Player 4`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore4()
                    
                    console.log(`Player 4's score is ${this.props.players[3].score}`)
                } 
            } else if (player === `Player 5`) {
                if (selectedAnswer === this.props.question.correct_answer) {
                    this.props.addPlayerScore5()
                    
                    console.log(`Player 5's score is ${this.props.players[4].score}`)
                } 
            }
            // else if (this.state.buttonPressed) {
            //     return this.setState({buttonPressed: true})
            // } 
            else {
                console.log('finished')
            }
          
        this.showNextButton()
        
    } 

    handleNextQuestion = (player) => {
        
        console.log(`hello ${player}`)
        console.log(this.props.data.length)
        console.log(this.props.currentQuestionID)
    
        if (player === `Player 1`) {
            this.setState({currentPlayer: `Player 2`})
        } else if (player === "Player 2" && this.props.noOfPlayers >= 3) {
                    this.setState({currentPlayer: `Player 3`})
        } else if (player === "Player 3" && this.props.noOfPlayers >= 4) {
            this.setState({currentPlayer: "Player 4"})
        } else if  (player === "Player 4" && this.props.noOfPlayers >= 5){
            this.setState({currentPlayer: "Player 5"})
        } else if (this.props.currentQuestionID + 1 >= this.props.data.length) {
            console.log("QUIZ FINISHED")
            this.props.history.push('/result')
        }
        else {
                this.setState({ currentPlayer: `Player 1` })
                }
        
       this.props.nextQuestion()
       for (let i = 1; i < 5; i++) {
        console.log(document.getElementById(`answerBtn${i}`))
        document.getElementById(`answerBtn${i}`).style= "visibility: visible"
        document.getElementById('nextq').style.visibility = "hidden"
        document.getElementById('correctAnswerh1').style = "visibility: hidden"
    }
}
    render() {
        const shuffledAnswer = [this.props.question.correct_answer, ...this.props.question.incorrect_answers].sort(() => Math.random() - 0.5);
        
        return (
            <div>
                    <h1>Q{this.props.currentQuestionID+1}/{this.props.data.length}</h1>
                    <h1>{this.state.currentPlayer} of {this.props.noOfPlayers}</h1>
                    <h1 dangerouslySetInnerHTML={{ __html: this.props.question.question }}></h1>
            
                <button id="answerBtn1" dangerouslySetInnerHTML={{ __html: shuffledAnswer[0] }} onClick={() => this.scoreChecker(shuffledAnswer[0], this.state.currentPlayer)} ></button> 
                <button id="answerBtn2" dangerouslySetInnerHTML={{ __html: shuffledAnswer[1] }} onClick={() => this.scoreChecker(shuffledAnswer[1],  this.state.currentPlayer)} ></button> 
                <button id="answerBtn3" dangerouslySetInnerHTML={{ __html: shuffledAnswer[2] }} onClick={() => this.scoreChecker(shuffledAnswer[2],  this.state.currentPlayer)} ></button> 
                <button id="answerBtn4" dangerouslySetInnerHTML={{ __html: shuffledAnswer[3] }} onClick={() => this.scoreChecker(shuffledAnswer[3],  this.state.currentPlayer)} ></button> 
                <button id="nextq" onClick={() => this.handleNextQuestion(this.state.currentPlayer)}>NEXT QUESTION</button>
                <h1 dangerouslySetInnerHTML={{ __html: `The correct answer was ${this.props.question.correct_answer}` }}id="correctAnswerh1"></h1>
            </div>
           
               
            
        )
    }
}

const mSTP = state => ({
    players: state.players,
    noOfPlayers: state.noOfPlayers,
    currentQuestionID: state.currentQuestionID,
})

export default withRouter(connect(mSTP, { data, nextQuestion, addPlayerScore1, addPlayerScore2, addPlayerScore3, addPlayerScore4, addPlayerScore5 }) (Question));
