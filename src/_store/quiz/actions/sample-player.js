import _ from 'lodash';
import { SAMPLE_PLAYER } from '../types';
import { PLAYERS } from '../../../_constants/players';

/**
 * Pick a player that we haven't seen before and mark it as selected
 *
 * This is a thunk because:
 *  - it needs seenPlayers so as not to choose a prior player again
 *  - it needs a promise for importing images (though this could move elsewhere)
 * @param skipped
 * @returns {Function}
 */
export function samplePlayer(skipped) {
  return (dispatch, getState) => {

    // pick a sample player and augment it with an image
    augmentPlayer(_samplePlayer(getState().seenPlayers))

    // dispatch the players and (selected) player
      .then(player => {
        dispatch({
          type: SAMPLE_PLAYER,
          payload: {
            player: player,
            skipped
          }
        });
      });
  };
}

/**
 * chose a random player from the players that we've not seen yet
 *
 * @param seenPlayers
 * @returns {*}
 * @private
 */
const _samplePlayer = (seenPlayers) => _.sample(_.reject(PLAYERS, player => _.includes(seenPlayers, player.name)));

/**
 * Add some extra data to the player derived from its properties:
 *   - image import
 *
 * @param player
 * @returns {Promise<T>}
 */
const augmentPlayer = (player) => {

  if (!player) {
    return Promise.resolve(null);
  }

  // eslint-disable-next-line
  return import(`../../../images/players/${getImageName(player.name)}.jpg`)
    .then(image => {
      player.image = image;
      return player;
    });
};

/**
 * helper to get the image file name from the players name
 *
 * @param playerName
 * @returns {string}
 */
const getImageName = (playerName) => {
  return playerName.toLowerCase().split(' ').join('-');
};
