import {FETCH_PLAYER} from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_PLAYER:
      return _.sample(action.payload.data);
    default:
      return state;
  }
}
