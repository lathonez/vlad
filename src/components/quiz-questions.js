import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { QUIZ_CATEGORIES } from '../data/quiz';
import { answer } from '../actions';
import { bindActionCreators } from 'redux';
import { samplePlayer } from '../actions/sample';

class QuizQuestions extends Component {

  getQuizItem(item) {
    return QUIZ_CATEGORIES[this.props.quiz.type][item];
  }

  getCorrectAnswer() {
    return this.props.player[this.props.quiz.type];
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

    // don't show the quiz questions if there's no quiz state set
    if (!this.props.quiz || this.props.player.infoVisible) {
      return '';
    }

    const nextButton = this.props.quiz.answered ? <div><hr/><button onClick={() => this.props.samplePlayer(false)}>Next</button></div> : '';

    return (
      <div>
        <hr/>
        <h3>What is this player's {this.getQuizItem('label')}?</h3>
        <h5>Answer correctly for {this.getQuizItem('points')} points</h5>
        {this.renderButtons()}
        {this.renderAnswerBlurb()}
        {nextButton}
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
  return { quiz: state.quiz, player: state.player };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizQuestions);
