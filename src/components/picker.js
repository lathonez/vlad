import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers, samplePlayer } from '../actions';
import { selectPlayer } from '../selectors';

class Picker extends Component {

  componentDidMount() {
    this.props.fetchPlayers();
  }

  onClick() {
    return this.props.samplePlayer(this.props.player.name);
  }

  renderPlayer() {

    if (!this.props.player) {
      return <div>loading..</div>
    }

    const {
      name, number, position, dateOfBirth, caps, goals, clubCountry, club, country, group
    } = this.props.player;

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
        <button onClick={this.onClick.bind(this)}>Next</button>
      </div>
    );
  }

  render() {
    return this.renderPlayer();
  }
}

const mapStateToProps = state => {

  return {
    player: selectPlayer(state),
  }
};

export default connect(mapStateToProps,  { fetchPlayers, samplePlayer })(Picker);