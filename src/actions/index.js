import _ from 'lodash';
import { PLAYERS } from '../data/players';

export const SAMPLE_PLAYER = 'sample_player';

export function samplePlayer() {
  return (dispatch, getState) => {

    // pick a sample player and augment it with an image
    augmentPlayer(_samplePlayer(getState().seenPlayers))

      // dispatch the players and (selected) player
      .then(player => {
        dispatch({
          type: SAMPLE_PLAYER,
          payload: {
            player: player
          }
        });
      });
  };
}

// chose a random player from the players that we've not seen yet
const _samplePlayer = (seenPlayers) => _.sample(_.reject(PLAYERS, player => _.includes(seenPlayers, player.name)));

const augmentPlayer = (player) => {

  if (!player) {
    return;
  }

  // eslint-disable-next-line
  return import(`../images/players/${getImageName(player.name)}.jpg`)
    .then(image => {
      player.image = image;
      return player;
    });
};

const getImageName = (playerName) => {
  return playerName.toLowerCase().split(' ').join('-');
};
