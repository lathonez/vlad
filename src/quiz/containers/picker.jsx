import { QUIZ_CATEGORIES } from '../../_constants/quiz';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { quizPlayer } from '../../_store/quiz/actions/quiz';

class QuizPicker extends Component {

  renderQuizButton = (type, label, points) => {
    return <button key={type} onClick={() => this.props.quizPlayer(type)}>{label} ({points})</button>
  };

  render() {

    const quiz = Object.entries(QUIZ_CATEGORIES)
      .map(([key, { label, points }]) => this.renderQuizButton(key, label, points));

    return (
      <div>
        <h3>Quiz</h3>
        <h4>What category can you guess?</h4>
        {quiz}
      </div>
    );
  }
}

export default connect(null, { quizPlayer })(QuizPicker);
