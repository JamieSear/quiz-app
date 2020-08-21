import React from 'react';
import BackButton from '../Components/BackButton.js';
import { connect } from 'react-redux';
import { getQuizData } from '../Actions/Actions.js'
import { withRouter} from 'react-router-dom';
import '../App.css';
import '../Styles/Play.css';
import '../Styles/BackButton.css'


class Play extends React.Component {
    constructor() {
        super();
        this.state={
            players: "2",
            questions: "1",
            category: "9",
            difficulty: "easy"
        };
        this.handleInput = this.handleInput.bind(this);
        this.retrieveQuiz = this.retrieveQuiz.bind(this);
        this.onResetClick = this.onResetClick.bind(this);

    }
 
    async retrieveQuiz(e){
        e.preventDefault()
        this.state.questions = this.state.questions * this.state.players
        this.props.getQuizData(this.state);
        this.props.history.push('/questions');  
    }

    onResetClick(e) { 
        e.preventDefault();
        this.setState({players: "2",
        questions: "1",
        category: "9",
        difficulty: "easy"})
    }

     handleInput(e) {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }  
    
    render() {
        
        return (
            <div>
                
                <BackButton />
                <h1>Design your quiz!</h1>
                <form id="quizform" onSubmit={this.retrieveQuiz}>
                    <label id="titleForm1" htmlFor="players">No. of Players</label>
                    
                    <select className="submissionForm" name="players" value={this.state.players} onChange={this.handleInput}>
                        <option value="2">2 Players</option>
                        <option value="3">3 Players</option>
                        <option value="4">4 Players</option>
                        <option value="5">5 Players</option>
                    </select>
                    <br/>
                <label id="titleForm2" htmlFor="questions">No. of Questions</label>
                <select className= "submissionForm" name="questions" value={this.state.questions} onChange={this.handleInput}>
                        <option value="1">1 Question</option>
                        <option value="2">2 Questions</option>
                        <option value="3">3 Questions</option>
                        <option value="4">4 Questions</option>
                        <option value="5">5 Questions</option>
                        <option value="6">6 Questions</option>
                        <option value="7">7 Questions</option>
                        <option value="8">8 Questions</option>
                        <option value="9">9 Questions</option>
                        <option value="10">10 Questions</option>
                </select>
                <br/>
                    <label className="titleForm" htmlFor="category">Category</label>
                    <select className="submissionForm" name="category" value={this.state.category} onChange={this.handleInput}>
                        <option value="9">General Knowledge</option>
                        <option value="10">Books</option>
                        <option value="11">Film</option>
                        <option value="12">Music</option>
                        <option value="13">Musicals & Theatre</option>
                        <option value="14">Television</option>
                        <option value="15">Video Games</option>
                        <option value="16">Board Games</option>
                        <option value="17">Science & Nature</option>
                        <option value="18">Computers</option>
                        <option value="19">Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Comics</option>
                        <option value="31">Japanese Anime</option>
                        <option value="32">Cartoons</option>
                    </select>
                    <br/>
                    <label className="titleForm" htmlFor="difficulty">Difficulty</label>
                    <select  className="submissionForm" name="difficulty" value={this.state.difficulty} onChange={this.handleInput}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <br/>
                    <button id="resetBtn" onClick={this.onResetClick}>Reset</button>
                    <input id="submitBtn" type="submit" value="Load Quiz"></input>
                </form>
             
            </div>
        )
    }
}

export default withRouter (connect(null, { getQuizData })(Play));
