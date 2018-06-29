import { call, put, select } from 'redux-saga/effects'
import _ from 'lodash';
import { PLAYER_SELECTED } from '../types';
import { PLAYERS } from '../../../_constants/players';

/**
 * Pick a player that we haven't seen before and dispatch the PLAYER_SELECTED action with it
 *
 * This is a saga because:
 *  - it needs a promise for importing images (though this could move elsewhere)
 * @param skipped
 * @returns {Function}
 */
export function* samplePlayer(seenPlayers, skipped) {
  const state = yield select();
  const player = _samplePlayer(state.game.player.history);
  player.image = yield call(importImage, player);
  yield put({type: PLAYER_SELECTED, payload: { player }});
}

// chose a random player from the players that we've not seen yet
const _samplePlayer = (seenPlayers) => _.sample(_.reject(PLAYERS, player => _.includes(seenPlayers, player.name)));

// Add some extra data to the player derived from its properties: (image import)
const importImage = player => import(`../../../images/players/${getImageName(player.name)}.jpg`);

// helper to get image file name from the player's name
const getImageName = playerName => playerName.toLowerCase().split(' ').join('-');
