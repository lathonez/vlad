import { combineReducers } from 'redux';
import PlayerReducer from './player';

const rootReducer = combineReducers({
  player: PlayerReducer,
});

export default rootReducer;
