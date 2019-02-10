import React, { Component } from 'react';
import Game from './Game';
import Score from './Score';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  checkAnswer = answerWasCorrect => {
    if (answerWasCorrect) {
      this.setState(currState => ({
        correctAnswer: currState.correctAnswer + 1,
      }));
    }
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1,
    }));
  };
  
  state = {
    correctAnswer: 0,
    numQuestions: 0,
  };
  
  render() {
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game checkAnswer={this.checkAnswer} />
		<Score numCorrect={this.state.correctAnswer} numQuestions={this.state.numQuestions} />
      </div>
    );
  }
}

export default App;
