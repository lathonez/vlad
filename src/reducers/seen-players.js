import { FETCH_PLAYERS, SAMPLE_PLAYER } from '../actions';

export default function(state = [], action) {

  console.log(action);

  switch (action.type) {
    case FETCH_PLAYERS:
      return state;
    case SAMPLE_PLAYER:

      // TODO - ES6ify
      console.log(state);
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
}
