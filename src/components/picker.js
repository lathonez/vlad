import React, { Component } from 'react';
import { connect } from 'react-redux';
import { samplePlayer } from '../actions/sample';
import { quizPlayer } from '../actions/quiz';
import Quiz from './quiz';
import { QUIZ_CATEGORIES } from '../data/quiz';

class Picker extends Component {

  constructor(props) {
    super(props);

    this.state = { showInfo: false, showQuiz: false };
  }

  componentDidMount() {
    this.props.samplePlayer();
  }

  onNext() {
    return this.onSkip();
  }

  onQuiz(type) {
    this.props.quizPlayer(type);
    this.setState({showQuiz: true});
  }

  onShowInfo() {
    this.setState({showInfo: true});
  }

  onSkip() {
    this.setState({showInfo: false, showQuiz: false});
    this.props.samplePlayer();
  }

  renderPlayerDetails() {

    const { name, number, position, dateOfBirth, caps, goals, clubCountry, club, country, group } = this.props.player;

    if (!this.state.showInfo) {
      return <div />;
    }

    return (
      <div>
        <h3>
          { name }
        </h3>
        <ul>
          <li>{ country } ({group})</li>
          <li>Number: { number }</li>
          <li>Position: { position }</li>
          <li>Date of Birth: { dateOfBirth }</li>
          <li>Caps: { caps }</li>
          <li>Goals: { goals }</li>
          <li>Domestic Club: { club } in { clubCountry }</li>
        </ul>
      </div>
    );
  }

  renderQuizButton(type, label, points) {
    return <button key={type} onClick={() => this.onQuiz(type)}>{label} ({points})</button>
  }

  renderQuizButtons() {
    // don't show quiz picker buttons if the info / quiz is showing
    if (this.state.showInfo || this.state.showQuiz) {
      return <div />;
    }

    const quiz = Object.entries(QUIZ_CATEGORIES).map(([key, { label, points }]) => this.renderQuizButton(key, label, points));

    return (
      <div>
        <hr/>
        <h3>Quiz</h3>
        {quiz}
      </div>
    );
  }

  render() {
    if (!this.props.player) {
      return <div>loading..</div>
    }

    const { image } = this.props.player;

    return (
      <div>
        <img src={image} alt="player" className="player-image"/>
        <div>Points: {this.props.points}</div>
        <hr/>
        <button onClick={this.onSkip.bind(this)}>Skip</button>
        {!this.state.showInfo ? <button onClick={this.onShowInfo.bind(this)}>Show Info</button> : ''}
        {this.renderPlayerDetails()}
        {this.renderQuizButtons()}
        {!this.state.showInfo && this.state.showQuiz ? <Quiz onNext={this.onNext.bind(this)} /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { player: state.player, quiz: state.quiz, points: state.points };
};

export default connect(mapStateToProps,  { samplePlayer, quizPlayer })(Picker);
