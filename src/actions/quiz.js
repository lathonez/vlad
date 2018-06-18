import _ from 'lodash';

import { QUIZ } from './index';
import { PLAYERS } from '../data/players';

const NUM_INCORRECT_ANSWERS = 3;

export function quizPlayer(type) {
  return (dispatch, getState) => {
    const { player } = getState();

    let toDispatch = {
      type: QUIZ,
      payload: {
        type,
        correct: '',
        incorrect: []
      }
    };

    switch(type) {

      case 'country': {
        toDispatch.payload.correct = player.country;
        toDispatch.payload.incorrect = getIncorrectCountries(player);
        break;
      }
      case 'name': {
        toDispatch.payload.correct = player.name;
        toDispatch.payload.incorrect = getIncorrectPlayerNames(player);
        break;
      }
      case 'number': {
        toDispatch.payload.correct = player.number;
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

const getIncorrectPlayerNames = (player) => {

  const teamMates = PLAYERS.filter(incorrectPlayer =>
    incorrectPlayer.country === player.country &&
    incorrectPlayer.name !== player.name
  );

  return _.sampleSize(teamMates, NUM_INCORRECT_ANSWERS).map(incorrectPlayer => incorrectPlayer.name);
};

const getIncorrectCountries = (player) => {

  return _.sampleSize(
    _.uniq(PLAYERS.map(incorrectPlayer => incorrectPlayer.country).filter(country => country !== player.country)),
    NUM_INCORRECT_ANSWERS
  );
};

const getIncorrectSquadNumbers = (player) => {
  return _.sampleSize(_.difference(Array.from(Array(20).keys()).map(num => num.toString()), player.number), NUM_INCORRECT_ANSWERS);
};
