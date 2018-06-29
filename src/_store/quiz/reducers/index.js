import { combineReducers } from 'redux';
import quiz from './quiz';
import points from './points';
import player from './player';

const reducers = combineReducers({
  quiz,
  player,
  points,
});

export default reducers;
