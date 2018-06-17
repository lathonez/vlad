import { SAMPLE_PLAYER } from '../actions';

export default function(state = [], action) {

  switch (action.type) {
    case SAMPLE_PLAYER:
      return action.payload.players || state;
    default:
      return state;
  }
}
