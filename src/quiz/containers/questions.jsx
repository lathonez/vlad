import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { QUIZ_CATEGORIES } from '../../_constants/quiz';
import { ANSWER } from '../../_store/quiz/types';

class QuizQuestions extends Component {

  getQuizItem(item) {
    return QUIZ_CATEGORIES[this.props.quiz.type][item];
  }

  getCorrectAnswer() {
    return this.props.player[this.props.quiz.type];
  }

  renderQuestionBlurb() {

    // do not show question blurb if quiz is answered
    if (this.props.quiz.answered) {
      return '';
    }

    return (
      <div>
        <h3>What is this player's {this.getQuizItem('label')}?</h3>
        <h5>Answer correctly for {this.getQuizItem('points')} points</h5>
      </div>
    );
  }

  renderAnswerBlurb() {

    if (!this.props.quiz.answered) {
      return '';
    }

    const blurb = `This player's ${this.getQuizItem('label')} is ${this.getCorrectAnswer()}`;

    return (
      <div>{this.props.quiz.correct ? 'You got it! ' : 'Unlucky! '}{blurb}</div>
    )
  }

  renderButton(answer) {
    const click = () => this.props.answer(answer === this.getCorrectAnswer(), this.getQuizItem('points'));
    return <button key={answer} onClick={click}>{answer}</button>;
  }

  renderButtons() {

    if (this.props.quiz.answered) {
      return '';
    }

    const { incorrect, type } = this.props.quiz;
    const correct = this.props.player[type];

    return _.shuffle([...incorrect, correct].map(answer => this.renderButton(answer)));
  }

  render() {
    return (
      <div>
        {this.renderQuestionBlurb()}
        {this.renderButtons()}
        {this.renderAnswerBlurb()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  answer: (correct, points) => dispatch({ type: ANSWER, payload: { correct, points }}),
});

const mapStateToProps = state => {
  return { quiz: state.game.quiz, player: state.game.player.selected };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizQuestions);
