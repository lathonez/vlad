import { combineReducers } from 'redux';
import SeenPlayersReducer from './seen-players';
import PlayersReducer from './players';
import PlayerReducer from './player';

const rootReducer = combineReducers({
  players: PlayersReducer,
  seenPlayers: SeenPlayersReducer,
  player: PlayerReducer,
});

export default rootReducer;
