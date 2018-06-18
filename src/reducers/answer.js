import { ANSWER } from '../actions';

export default function(state = 0, action) {
  switch (action.type) {
    case ANSWER:
      return state + action.payload;
    default:
      return state;
  }
}

