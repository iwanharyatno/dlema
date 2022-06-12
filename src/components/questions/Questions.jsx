import React from 'react';
import MultipleChoices from './MultipleChoices.jsx';
import Button from '../Button';

class Questions extends React.Component {
    state = {
        questionIndex: 0,
        answers: []
    }

    prevQuestion = () => {
        if (this.state.questionIndex === 0) return;
        this.setState({
            questionIndex: this.state.questionIndex-1
        });
    }

    nextQuestion = () => {
        if (this.state.questionIndex === (this.props.problems.length - 1)) return;
        this.setState({
            questionIndex: this.state.questionIndex+1
        });
    }

    saveAnswer = (index) => {
        const answers = this.state.answers;
        answers.push(index);

        this.setState({
            questionIndex: this.state.questionIndex,
            answers: answers
        });
        console.log(this.state.answers);
    }

    render() {
        const problem = this.props.problems[this.state.questionIndex];

        return (
            <div className="p-5 my-4 mx-auto md:max-w-[50%]">
                <MultipleChoices problem={problem} onAnswer={this.saveAnswer} preAnswer={this.state.answers[this.state.questionIndex]} />
                <div className="flex mt-4">
                    <Button text="PREV" className="flex-1 py-3" onClick={this.prevQuestion}/>
                    <Button text="NEXT" className="flex-1 py-3" onClick={this.nextQuestion}/>
                </div>
            </div>
        );
    }
}

export default Questions;
