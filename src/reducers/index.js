import { combineReducers } from 'redux';
import SeenPlayersReducer from './seen-players';
import PlayersReducer from './players';
import SamplePlayerReducer from './sample-player';

const rootReducer = combineReducers({
  players: PlayersReducer,
  seenPlayers: SeenPlayersReducer,
  player: SamplePlayerReducer,
});

export default rootReducer;
