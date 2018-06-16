import { FETCH_PLAYERS } from '../actions';

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_PLAYERS:
      return action.payload.data;
    default:
      return state;
  }
}
