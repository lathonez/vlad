import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizQuestions from './containers/questions';
import PlayerInfo from './components/player-info';
import QuizPicker from './components/picker';
import { QUIZ, SAMPLE_PLAYER } from '../_store/quiz/types';

class Picker extends Component {

  state = {
    infoVisible: false
  };

  componentDidMount() {
    this.props.samplePlayer(false);
  }

  onSkip(skipped) {
    this.setState({infoVisible: false});
    this.props.samplePlayer(skipped);
  }

  onQuiz(type) {
    return this.props.pickQuiz(type, this.props.player);
  }

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

  renderQuiz() {

    // no quiz if we're showing info
    if (this.state.infoVisible) {
      return '';
    }

    return this.props.quiz === null ? <QuizPicker click={this.onQuiz.bind(this)}/> : <QuizQuestions/>;
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
        {this.renderQuiz()}
        <div>
          {this.renderButtons()}
          {this.renderPlayerInfo()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  samplePlayer: (skipped) => dispatch({ type: SAMPLE_PLAYER, payload: { skipped } }),
  pickQuiz: (type, player) => dispatch({ type: QUIZ, payload: { type, player } })
});

const mapStateToProps = state => {
  return {
    player: state.game.player.selected,
    quiz: state.game.quiz,
    points: state.game.points
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Picker);
