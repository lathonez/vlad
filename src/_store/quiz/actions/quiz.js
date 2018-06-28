import _ from 'lodash';

import { ANSWER, QUIZ } from '../types';
import { PLAYERS } from '../../../_constants/players';

const NUM_INCORRECT_ANSWERS = 3;

export function answer(correct, points) {
  return {
    type: ANSWER,
    payload: { correct, points }
  }
}

/**
 * Given the currently seleted player, derive some incorrect answers for the quiz type
 * This is a thunk because it needs the current player to set the answers up
 *
 * @param type
 * @returns {Function}
 */
export function quizPlayer(type) {
  return (dispatch, getState) => {
    const { player } = getState().quiz;

    let toDispatch = {
      type: QUIZ,
      payload: {
        type,
        incorrect: []
      }
    };

    switch(type) {

      case 'country': {
        toDispatch.payload.incorrect = getIncorrectCountries(player);
        break;
      }
      case 'name': {
        toDispatch.payload.incorrect = getIncorrectPlayerNames(player);
        break;
      }
      case 'number': {
        toDispatch.payload.incorrect = getIncorrectSquadNumbers(player);
        break;
      }
      default: {
        // do nothing
      }
    }

    dispatch(toDispatch);
  }
}

/**
 * Get a random list of players from the same team (not inc player)
 *
 * @param player
 * @returns {any[]}
 */
const getIncorrectPlayerNames = (player) => {

  const teamMates = PLAYERS.filter(incorrectPlayer =>
    incorrectPlayer.country === player.country &&
    incorrectPlayer.name !== player.name
  );

  return _.sampleSize(teamMates, NUM_INCORRECT_ANSWERS).map(incorrectPlayer => incorrectPlayer.name);
};

/**
 * Get a random list of countries (not inc player's)
 *
 * @param player
 * @returns {Array}
 */
const getIncorrectCountries = (player) => {

  return _.sampleSize(
    _.uniq(PLAYERS.map(incorrectPlayer => incorrectPlayer.country).filter(country => country !== player.country)),
    NUM_INCORRECT_ANSWERS
  );
};

/**
 * Get a random list of squad numbers (not inc player's or 0)
 *
 * @param player
 * @returns {Array}
 */
const getIncorrectSquadNumbers = (player) => {
  return _.sampleSize(_.without(Array.from(Array(20).keys()).map(num => num.toString()), '0', player.number.toString()), NUM_INCORRECT_ANSWERS);
};
