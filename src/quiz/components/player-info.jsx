import React, { PureComponent } from 'react';

export default class PlayerInfo extends PureComponent {

  render() {

    const { name, number, position, dateOfBirth, caps, goals, clubCountry, club, country, group } = this.props.player;

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
}
