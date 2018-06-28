import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { QUIZ_CATEGORIES } from '../../_constants/quiz';
import { answer } from '../../_store/quiz/actions/quiz';
import { bindActionCreators } from 'redux';
import { samplePlayer } from '../../_store/quiz/actions/sample-player';

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
    const click = () => this.props.answerAction(answer === this.getCorrectAnswer(), this.getQuizItem('points'));
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

// Anything returned from this function will end up as props on the book list container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ answerAction: answer, samplePlayer }, dispatch);
}

const mapStateToProps = state => {
  return { quiz: state.quiz.quiz, player: state.quiz.player };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizQuestions);
