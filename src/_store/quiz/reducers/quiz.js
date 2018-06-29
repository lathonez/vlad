import _ from 'lodash';
import { ANSWER, QUIZ, SAMPLE_PLAYER } from '../types';
import { PLAYERS } from '../../../_constants/players';

export default function(state = null, action) {
  switch (action.type) {
    case ANSWER:
      // mark quiz as answered and flag correctness
      return {
        ...state, answered: true, correct: action.payload.correct
      };
    case QUIZ:
      const { type, player } = action.payload;
      // find some incorrect answers for this player
      return { type, incorrect: getIncorrectAnswers(player, type) };
    case SAMPLE_PLAYER:
      return null;
    default:
      return state;
  }
}

const NUM_INCORRECT_ANSWERS = 3;

const getIncorrectAnswers = (player, type) => {
  switch (type) {
    case 'country':
      return getIncorrectCountries(player);
    case 'name':
      return getIncorrectPlayerNames(player);
    case 'number':
      return getIncorrectSquadNumbers(player);
    default:
      throw Error(`Unhandled type ${type}`);
  }
};

// Get a random list of players from the same team (not inc player)
const getIncorrectPlayerNames = (player) => {

  const teamMates = PLAYERS.filter(incorrectPlayer =>
    incorrectPlayer.country === player.country &&
    incorrectPlayer.name !== player.name
  );

  return _.sampleSize(teamMates, NUM_INCORRECT_ANSWERS).map(incorrectPlayer => incorrectPlayer.name);
};

// Get a random list of countries (not inc player's)
const getIncorrectCountries = (player) => {

  return _.sampleSize(
    _.uniq(PLAYERS.map(incorrectPlayer => incorrectPlayer.country).filter(country => country !== player.country)),
    NUM_INCORRECT_ANSWERS
  );
};

// Get a random list of squad numbers (not inc player's or 0)
const getIncorrectSquadNumbers = (player) => {
  return _.sampleSize(_.without(Array.from(Array(20).keys()).map(num => num.toString()), '0', player.number.toString()), NUM_INCORRECT_ANSWERS);
};
