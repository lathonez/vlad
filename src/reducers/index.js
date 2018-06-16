import { combineReducers } from 'redux';
import SeenPlayersReducer from './seen-players';
import PlayersReducer from './players';

const rootReducer = combineReducers({
  players: PlayersReducer,
  seenPlayers: SeenPlayersReducer
});

export default rootReducer;
