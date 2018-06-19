import { ANSWER, SAMPLE_PLAYER } from '../actions';

export default function(state = 0, action) {
  switch (action.type) {
    case ANSWER:
      // increment the state with the points if correct, else decrement by half points
      return state + (action.payload.correct ? action.payload.points : action.payload.points / 2 * -1);
    case SAMPLE_PLAYER:
      // lose one point on skip
      return action.payload.skipped ? state -1 : state;
    default:
      return state;
  }
}

