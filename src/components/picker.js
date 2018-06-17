import React, { Component } from 'react';
import { connect } from 'react-redux';
import { samplePlayer } from '../actions';

class Picker extends Component {

  constructor(props) {
    super(props);

    this.state = { showInfo: false };
  }

  componentDidMount() {
    this.props.samplePlayer();
  }

  onShowInfo() {
    this.setState({showInfo: true});
  }

  onSkip() {
    this.setState({showInfo: false});
    this.props.samplePlayer();
  }

  renderPlayerDetails() {

    const { name, number, position, dateOfBirth, caps, goals, clubCountry, club, country, group } = this.props.player;

    if (!this.state.showInfo) {
      return <div></div>;
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

  render() {
    if (!this.props.player) {
      return <div>loading..</div>
    }

    const { image } = this.props.player;

    return (
      <div>
        <img src={image} alt="player" className="player-image"/>
        <hr></hr>
        <button onClick={this.onSkip.bind(this)}>Skip</button>
        <button onClick={this.onShowInfo.bind(this)}>Show Info</button>
        {this.renderPlayerDetails()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { player: state.player };
};

export default connect(mapStateToProps,  { samplePlayer })(Picker);
