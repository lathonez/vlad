import { QUIZ_CATEGORIES } from '../data/quiz';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { quizPlayer } from '../actions/quiz';

class QuizPicker extends Component {

  renderQuizButton = (type, label, points) => {
    return <button key={type} onClick={() => this.props.quizPlayer(type)}>{label} ({points})</button>
  };

  render() {

    // don't show the quiz picker if we've got a quiz
    if (this.props.quiz || this.props.player.infoVisible) {
      return '';
    }

    const quiz = Object.entries(QUIZ_CATEGORIES)
      .map(([key, { label, points }]) => this.renderQuizButton(key, label, points));

    return (
      <div>
        <hr/>
        <h3>Quiz</h3>
        {quiz}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { quiz: state.quiz, player: state.player };
};

export default connect(mapStateToProps, { quizPlayer })(QuizPicker);
