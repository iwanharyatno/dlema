import React from 'react';

class MultipleChoices extends React.Component {
    render() {
        const choices = this.props.problem.answerChoices.map((value, index) => 
            <li key={index} onClick={() => this.props.onAnswer(index)} className={'p-4 my-2 shadow ' + ((this.props.preAnswer === index) ? 'bg-slate-700 text-white' : '')}>{value}</li>
        );

        return (
            <div className="p-7 rounded-md border">
                <h2 className="text-lg mb-5">{this.props.problem.title}</h2>
                <ul>{choices}</ul>
            </div>
        );
    }
}

export default MultipleChoices;
