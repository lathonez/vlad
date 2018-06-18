import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { QUIZ_CATEGORIES } from '../data/quiz';
import { answer } from '../actions/answer';
import { bindActionCreators } from 'redux';

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {answered: false};
  }

  getQuizLabel() {
    return QUIZ_CATEGORIES[this.props.quiz.type].label;
  }

  getQuizPoints() {
    return QUIZ_CATEGORIES[this.props.quiz.type].points;
  }

  onIncorrect() {
    this.props.answer(false, this.getQuizPoints());
    this.setState({answered: true, correct: false});
  }

  onCorrect() {
    this.props.answer(true, this.getQuizPoints());
    this.setState({answered: true, correct: true});
  }

  renderAnswerBlurb() {

    const blurb = `This player's ${this.getQuizLabel()} is ${this.props.quiz.correct}`;

    return (
      <div>{this.state.correct ? 'You got it! ' : 'Unlucky! '}{blurb}</div>
    )
  }

  renderButtons() {

    const { correct, incorrect } = this.props.quiz;

    let buttons = [
        ...incorrect.map(incorrectAnswer => <button key={incorrectAnswer} onClick={this.onIncorrect.bind(this)}>{incorrectAnswer}</button>),
      <button key={correct} onClick={this.onCorrect.bind(this)}>{correct}</button>
    ];

    return _.shuffle(buttons);
  }

  render() {
    return (
      <div>
        <hr/>
        <h3>What is this player's {this.getQuizLabel()}?</h3>
        <h5>Answer correctly for {this.getQuizPoints()} points</h5>
        {!this.state.answered ? this.renderButtons() : this.renderAnswerBlurb()}
        {this.state.answered ? <div><hr/><button onClick={this.props.onNext}>Next</button></div> : ''}
      </div>
    )
  }
}

// Anything returned from this function will end up as props on the book list container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ answer }, dispatch);
}

const mapStateToProps = state => {
  return { quiz: state.quiz };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
