import { QUIZ_CATEGORIES } from '../../_constants/quiz';
import React, { PureComponent } from 'react';

export default class QuizPicker extends PureComponent {

  renderQuizButton = (type, label, points) => {
    return <button key={type} onClick={() => this.props.click(type)}>{label} ({points})</button>
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
