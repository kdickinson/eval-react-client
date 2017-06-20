import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
// import {createStore} from 'redux'

class App extends React.Component {
    render() {
        return (<Question />);
    }
};

class Distractor extends React.Component {
    render() {
        return (
            <label className="distractor">
                <input 
                    type="radio" 
                    name="distractor" 
                    key={this.props.id} 
                    value={this.props.id} 
                    />
                {this.props.text}
            </label>
        );
    }
}


class Question extends React.Component {
    
    constructor(props) {
        super (props);
        this.currentQuestionIndex = 0;
        this.dataUrl = 'http://localhost:3000/';
        this.handleNext = () => this.goToNextQuestion();
        this.state = {
            currentQuestion: {
                question: '',
                distractors: []
            }
        };
    };

    componentWillMount(){
        this.getRandomizedQuestionIds();
    }

    getRandomizedQuestionIds(){
        Request.get('http://localhost:3000').then((res) => {
            this.randomizedQuestionIds = res.body;
            this.goToNextQuestion();
        });
    }
    
    getQuestion(id){
        Request.get(`${this.dataUrl}question/${id}`).then((res) => {
            this.setState({currentQuestion: res.body});
        });
    }

    goToNextQuestion() {
        if (this.currentQuestionIndex < this.randomizedQuestionIds.length){
            this.getQuestion(this.randomizedQuestionIds[this.currentQuestionIndex++]);
        }
    }

    render() {
        return (
            <div className="question">
                <h2>{this.state.currentQuestion.question}</h2>
                {this.state.currentQuestion.distractors.map(function(distractor, i){
                    return (<Distractor key={i} value={distractor.id} text={distractor.text} />);
                })}
                <button onClick={this.handleNext}>Next Question</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));