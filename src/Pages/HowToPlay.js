import React from 'react';
import { withRouter } from 'react-router-dom';
import BackButton from '../Components/BackButton.js'

import '../App.css';
import '../Styles/HowToPlay.css';

const HowToPlay = ({ history }) => {
    return (
        <div>
            <BackButton />
                <div id="content">
                    <h2>How to play:</h2>
                        <ol>
                            <li>
                                Select up to 5 players to quiz with as well as how many questions you want to answer each.
                            </li>
                            <li>
                                Choose your favourite topic for the quiz, or go rogue and choose one you are less familiar with!
                            </li>
                            <li>
                                Finally - choose your difficulty! Whether you're new to quizzes or you all fancy a challenge on your favourite topics you can choose how easy or hard you want it!
                            </li>
                        </ol>
                </div>
        </div>
    )
}

export default withRouter(HowToPlay);