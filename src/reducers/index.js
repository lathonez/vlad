import { combineReducers } from 'redux';
import SeenPlayersReducer from './seen-players';
import PlayerReducer from './player';

const rootReducer = combineReducers({
  seenPlayers: SeenPlayersReducer,
  player: PlayerReducer,
});

export default rootReducer;
