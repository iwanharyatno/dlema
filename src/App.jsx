import React from 'react';

import Navbar from './components/Navbar';
import Button from './components/Button';
import Questions from './components/questions/Questions';

const problems = [
    {
        title: 'Where do we live?',
        answerChoices: ['On a Rocky planet named Earth', 'In the interstellar space', 'In the asteroids belt', 'In the core of the Sun']
    },
];

class App extends React.Component {
    state = {
        quizStarted: true
    }

    startQuiz = () => {
        this.setState({
            quizStarted: true
        });
    }
    render = () => {
        if (this.state.quizStarted) {
            return (
                <div>
                    <Navbar text="DLEMA"/>
                    <Questions problems={problems}/>
                </div>
            );
        }

        return (
            <div className="p-8 mt-4 text-center">
                <h1 className="text-3xl text-blue-700 mb-3">Dlema Quiz App</h1>
    	        <p className="text-gray-400 mb-4">A simple and static quizz App. Made by <a href="https://github.com/iwanharyatno" className="text-blue-400">Iwan Haryatno</a>.</p>
                <Button text="Start" onClick={this.startQuiz} />
            </div>
        );
    }
}
export default App;
