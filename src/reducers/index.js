import { combineReducers } from 'redux';
import SeenPlayersReducer from './seen-players';
import PlayerReducer from './player';
import QuizReducer from './quiz';
import AnswerReducer from './answer';

const rootReducer = combineReducers({
  seenPlayers: SeenPlayersReducer,
  player: PlayerReducer,
  points: AnswerReducer,
  quiz: QuizReducer,
});

export default rootReducer;
