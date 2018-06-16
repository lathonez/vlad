import { FETCH_PLAYERS, SAMPLE_PLAYER } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_PLAYERS:
      return samplePlayer(action.payload.data, []);
    case SAMPLE_PLAYER:
      return samplePlayer(action.payload.players, action.payload.seenPlayers);
    default:
      return state;
  }
}

const samplePlayer = (players, seenPlayers) => _.sample(_.reject(players, player => _.includes(seenPlayers, player.name)));
