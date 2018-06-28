import { SAMPLE_PLAYER } from '../types';

export default function(state = [], action) {

  switch (action.type) {
    case SAMPLE_PLAYER:
      // add this player (name) to our list of seen players
      return [...state, action.payload.player.name];
    default:
      return state;
  }
}
