import React, { Component } from 'react';
import { connect } from 'react-redux';
import { samplePlayer } from '../actions/sample';
import QuizQuestions from './quiz-questions';
import PlayerInfo from './player-info';
import QuizPicker from './quiz-picker';
import { info } from '../actions';

class Picker extends Component {

  componentDidMount() {
    this.props.samplePlayer();
  }

  render() {
    if (!this.props.player) {
      return <div>loading..</div>
    }

    const { image, infoVisible } = this.props.player;

    const infoButton = !infoVisible ? <button onClick={this.props.info}>Show Info</button> : '';

    return (
      <div>
        <img src={image} alt="player" className="player-image"/>
        <div>Points: {this.props.points}</div>
        <hr/>
        <button onClick={() => this.props.samplePlayer(true)}>Skip</button>
        {infoButton}
        <PlayerInfo />
        <QuizPicker />
        <QuizQuestions />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { player: state.player, quiz: state.quiz, points: state.points };
};

export default connect(mapStateToProps,  { info, samplePlayer })(Picker);
