import { combineReducers } from 'redux';
import quiz from './quiz';
import points from './points';
import player from './player';
import seenPlayers from './seen-players';

const reducers = combineReducers({
  quiz,
  player,
  points,
  seenPlayers,
});

export default reducers;
