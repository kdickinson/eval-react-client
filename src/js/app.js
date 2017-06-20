import React from 'react'
import ReactDOM from 'react-dom'
// import {createStore} from 'redux'

class App extends React.Component {
    render() {
        return (Question);
    }
};

class Distractor extends React.Component {
    render() {
        return (
            <label>
                <input type="radio" key={this.props.key} value={this.props.id} />{this.text}
            </label>
        );
    }
}

class Question extends React.Component {
    getInitialState() {
        return {
            currentQuestion: {
                text: 'What is your quest?',
                distractors: [
                    {
                        id: 0,
                        text: 'Red, no blue'
                    },
                    {
                        id: 1,
                        text: 'I seek the Holy Grail!',
                        correct: true
                    },
                    {
                        id: 2,
                        text: 'I don\'t know'
                    },
                    {
                        id: 3,
                        text: 'Chocolate'
                    },
                ]
            }
        };
    };

    render() {
        return (
            <div>
                <h2>{this.state.currentQuestion.text}</h2>
                {this.state.currentQuestion.distractors.map(function(distractor, i){
                    return (<Distractor key={i} value={distractor.id} text={distractor.text} />);
                })}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));