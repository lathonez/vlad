export const ANSWER = 'answer';
export const INFO = 'info';
export const QUIZ = 'quiz';
export const SAMPLE_PLAYER = 'sample_player';

/**
 * Save the answer state
 *
 * @param answerObj - { answer, correct, correctAnswer, points, type }
 * @returns {{type: string, payload: *}}
 */
export function answer(correct, points) {
  return {
    type: ANSWER,
    payload: { correct, points }
  }
}

/**
 * This is just to set a 'infoVisible' property on the player
 * @returns {{type: string, payload: null}}
 */
export function info() {
  return {
    type: INFO,
    payload: null
  }
}
