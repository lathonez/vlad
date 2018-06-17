import axios from 'axios';
import _ from 'lodash';

export const SAMPLE_PLAYER = 'sample_player';

export function samplePlayer() {
  return (dispatch, getState) => {

    const {players, seenPlayers} = getState();

    // no players, need to fetch then sample
    getPlayers(players)
      .then(players => {
        dispatch({
          type: SAMPLE_PLAYER,
          payload: {
            player: _samplePlayer(players, seenPlayers),
            players: players
          }
        });
    });
  };
}

const getPlayers = (players) => {

  if (players.length) {
    return Promise.resolve(players);
  }

  return axios.get('https://raw.githubusercontent.com/lathonez/vlad/master/public/wc-2018-squads.json')
    .then(response => response.data);
};

const _samplePlayer = (players, seenPlayers) => _.sample(_.reject(players, player => _.includes(seenPlayers, player.name)));
