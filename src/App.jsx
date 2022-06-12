import React from 'react';

import Navbar from './components/Navbar';
import Button from './components/Button';
import Questions from './components/questions/Questions';

import problems from './resources/problems.json';
import correctAnswers from './resources/correct-answers.json';

class App extends React.Component {
    state = {
        quizStarted: false,
        quizFinished: false,
        accuration: 0
    }

    start = () => {
        this.setState({
            quizStarted: true,
            quizFinished: false,
            accuration: 0
        });
    }

    finish = (accuration) => {
        this.setState({
            quizStarted: false,
            quizFinished: true,
            accuration: accuration
        });
    }

    render = () => {
        if (this.state.quizStarted) {
            return (
                <div>
                    <Navbar text="Dlema" />
                    <Questions problems={problems} correctAnswers={correctAnswers} onFinish={this.finish} />
                </div>
            );
        }

        if (this.state.quizFinished) {
            let accurationColor = "";
            if (this.state.accuration < 50) accurationColor = "text-red-700";
            if (this.state.accuration >= 50 && this.state.accuration < 80) accurationColor = "text-yellow-700";
            if (this.state.accuration >= 80 && this.state.accuration < 90) accurationColor = "text-blue-700";
            if (this.state.accuration >= 90) accurationColor = "text-green-700";

            return (
                <div>
                    <Navbar text="Dlema" />
                    <div className="p-4 text-center md:max-w-[50%] mx-auto">
                        <h1 className="mb-3 text-3xl">Your Accuration:</h1>
                        <div className={accurationColor + ' font-bold p-4 text-5xl mb-5'}>{this.state.accuration}%</div>
                        <Button text="Play Again" onClick={this.start}/>
                    </div>
                </div>
            );
        }

        return (
            <div className="p-8 mt-12 text-center">
                <h1 className="text-3xl text-blue-700 mb-3">Dlema Quiz App</h1>
    	        <p className="text-gray-400 mb-4">A simple and static quizz App. Made by <a href="https://github.com/iwanharyatno" className="text-blue-400">Iwan Haryatno</a>.</p>
                <Button text="Start" onClick={this.start} />
            </div>
        );
    }
}
export default App;
