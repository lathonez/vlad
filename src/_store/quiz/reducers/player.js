import { PLAYER_SELECTED } from '../types';

const initialState = {
  history: [],
  selected: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PLAYER_SELECTED:
      return {
        history: [...state.history, action.payload.player.name],
        selected: action.payload.player
      };
    default:
      return state;
  }
}

