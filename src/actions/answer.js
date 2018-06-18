import { ANSWER } from './index';

export function answer(correct, points) {
  return {
    type: ANSWER,
    payload: correct ? points : -1 * points / 2
  }
}
