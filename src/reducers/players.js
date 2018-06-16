import { FETCH_PLAYERS, SAMPLE_PLAYER } from '../actions';

export default function(state = [], action) {

  console.log(action);

  switch (action.type) {
    case FETCH_PLAYERS:
      return action.payload.data;
    case SAMPLE_PLAYER:
      return state;
    default:
      return state;
  }
}
