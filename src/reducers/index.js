import { combineReducers } from 'redux';
import SeenPlayersReducer from './seen-players';
import PlayerReducer from './player';
import QuizReducer from './quiz';
import PointsReducer from './points';

const rootReducer = combineReducers({
  seenPlayers: SeenPlayersReducer,
  player: PlayerReducer,
  points: PointsReducer,
  quiz: QuizReducer,
});

export default rootReducer;
