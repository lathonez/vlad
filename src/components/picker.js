import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayer } from "../actions";

class Picker extends Component {

  componentDidMount() {
    this.props.fetchPlayer();
  }

  renderPlayer() {

    const {
      name, number, position, dateOfBirth, caps, goals, clubCountry, club, country, group
    } = this.props.player;

    if (!this.props.player) {
      return <div>loading..</div>
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

    console.log(this.props.player);

    return this.renderPlayer();
  }
}

function mapStateToProps( state ) {
  return {
    player: state.player
  }
}

export default connect(mapStateToProps,  { fetchPlayer })(Picker);
