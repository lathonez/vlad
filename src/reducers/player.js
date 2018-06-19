import { INFO, SAMPLE_PLAYER } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SAMPLE_PLAYER:
      // return the player
      return action.payload.player;
    case INFO:
      // flag that info for this player is visible
      return {
        ...state, infoVisible: true
      };
    default:
      return state;
  }
}

