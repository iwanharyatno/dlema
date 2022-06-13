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
        if (this.state.questionIndex === (this.props.problems.length - 1)) {
            this.computeAccuration();
            return;
        }
        this.setState({
            questionIndex: this.state.questionIndex+1
        });
    }

    saveAnswer = (index) => {
        const answers = this.state.answers;
        if (answers[this.state.questionIndex] == undefined) {
            answers.push(index);
        } else {
            answers[this.state.questionIndex] = index;
        }

        this.setState({
            questionIndex: this.state.questionIndex,
            answers: answers
        });
        console.log(this.state.answers);
    }

    computeAccuration = () => {
        let points = 0;
        this.state.answers.map((answer, index) => {
            if (this.props.problems[index].correctAnswer === answer) points++;
        });

        const accuration = points * 100 / this.props.problems.length;
        this.props.onFinish(accuration);
    }

    render() {
        const problem = this.props.problems[this.state.questionIndex];
        let nextDoneButton;
        if (this.state.questionIndex === (this.props.problems.length - 1)) {
            nextDoneButton = <Button text="DONE" className="flex-1 py-3" color="bg-green-700 hover:bg-green-900" onClick={this.computeAccuration} />
        } else {
            nextDoneButton = <Button text="NEXT" className="flex-1 py-3" onClick={this.nextQuestion} />
        }

        return (
            <div className="p-5 my-4 mx-auto md:max-w-[50%]">
                <MultipleChoices problem={problem} onAnswer={this.saveAnswer} preAnswer={this.state.answers[this.state.questionIndex]} />
                <div className="flex mt-4">
                    <Button text="PREV" className="flex-1 py-3" onClick={this.prevQuestion}/>
                    {nextDoneButton}
                </div>
            </div>
        );
    }
}

export default Questions;
