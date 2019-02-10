import React, { Component } from 'react';

class Game extends Component {
  
  constructor(props) {
    super(props);
    const valuesArray = this.startNewGame();
    this.state = {
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3],
    };
  }
  
  updateState = newValuesArray => {
    this.setState(currState => ({
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3],
    }));
  };
  
  checkAnswer = event => {
    const newValuesArray = this.startNewGame();
    this.updateState(newValuesArray);
    const answerWasCorrect = this.evaluateAnswer(event.target.name);
    this.props.checkAnswer(answerWasCorrect);
  };

  evaluateAnswer(givenAnswer) {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const corrAnswer = value1 + value2 + value3;

    return (
      (corrAnswer === proposedAnswer && givenAnswer === 'true') ||
      (corrAnswer !== proposedAnswer && givenAnswer === 'false')
    );
  }
  
  startNewGame = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  }
  
  render(){
    return(
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
        	<p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
      	</div>
        <button name="true" onClick={this.checkAnswer} >True</button>
        <button name="false" onClick={this.checkAnswer} >False</button>
      </div>
    )
  }
  
}

export default Game;