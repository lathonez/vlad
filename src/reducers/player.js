import {FETCH_PLAYER} from "../actions";

export default function(state = {}, action) {

  console.log(action);

  switch (action.type) {
    case FETCH_PLAYER:
      return action.payload;
    default:
      return state;
  }
}
