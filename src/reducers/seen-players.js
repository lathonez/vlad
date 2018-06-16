import { SAMPLE_PLAYER } from '../actions';

export default function(state = [], action) {

  switch (action.type) {
    case SAMPLE_PLAYER:
      return [...state, action.payload.player];
    default:
      return state;
  }
}
