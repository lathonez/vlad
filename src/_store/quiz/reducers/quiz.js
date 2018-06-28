import { ANSWER, QUIZ, SAMPLE_PLAYER } from '../types';

export default function(state = null, action) {
  switch (action.type) {
    case ANSWER:
      // mark quiz as answered and flag correctness
      return {
        ...state, answered: true, correct: action.payload.correct
      };
    case QUIZ:
      // pass-through incorrect questions from action
      return action.payload;
    case SAMPLE_PLAYER:
      return null;
    default:
      return state;
  }
}

