import React from 'react';

const Score = props => {
  return (
        <div>
          <p className="text">
          Your Score: {props.numCorrect}/{props.numQuestions}
          </p>
		</div>
  );
};

export default Score;