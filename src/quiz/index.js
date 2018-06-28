import React, { Component } from 'react';
import { connect } from 'react-redux';
import { samplePlayer } from '../_store/quiz/actions/sample-player';
import QuizQuestions from './containers/questions';
import PlayerInfo from './components/player-info';
import QuizPicker from './containers/picker';

class Picker extends Component {

  state = {
    infoVisible: false
  };

  componentDidMount() {
    this.props.samplePlayer();
  }

  /**
   * E.g. next or skip - if skipped points will be minused
   *
   * @param skipped
   */
  onSkip(skipped) {
    this.setState({infoVisible: false});
    this.props.samplePlayer(skipped);
  }

  /**
   * Responsible for next and skip buttons
   *
   * @returns {*}
   */
  renderButtons() {
    const nextAble = this.props.quiz && this.props.quiz.answered;
    const { infoVisible } = this.state;

    return (
      <div>
        <button onClick={() => this.onSkip(!nextAble)}>{nextAble ? 'Next' : 'Skip'}</button>
        {infoVisible ? '' : <button onClick={() => this.setState({infoVisible: true})}>Show Info</button>}
      </div>

    );
  }

  renderPlayerInfo() {

    if (!this.state.infoVisible || (this.props.quiz && !this.props.quiz.answered)) {
      return '';
    }

    return <PlayerInfo player={this.props.player}/>;
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
        {this.props.quiz !== null ? <QuizQuestions /> : <QuizPicker />}
        {this.renderButtons()}
        {this.renderPlayerInfo()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { player: state.quiz.player, quiz: state.quiz.quiz, points: state.quiz.points };
};

export default connect(mapStateToProps,  { samplePlayer })(Picker);
