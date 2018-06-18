import { QUIZ } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case QUIZ:
      return action.payload;
    default:
      return state;
  }
}

