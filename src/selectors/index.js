import { createSelector } from 'reselect';
import _ from 'lodash';

const players = state => state.players;
const seenPlayers = state => state.seenPlayers;

export const selectPlayer = createSelector(
  [players, seenPlayers],
  (players, seenPlayers) => {

    // TODO - make this nice
    let player = _.sample(players);

    if (!player) {
      return player;
    }

    while (seenPlayers.indexOf(player.name) > -1) {
      player = _.sample(players);
    }

    return player;
  }
);


