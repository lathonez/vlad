import axios from 'axios';

export const FETCH_PLAYERS = 'fetch_players';
export const SAMPLE_PLAYER = 'sample_player';

export function fetchPlayers(players) {

  // cache
  if (players) {
    return {
      type: FETCH_PLAYERS,
      payload: Promise.resolve({data: players})
    };
  }

  const prom = axios.get('https://raw.githubusercontent.com/lathonez/vlad/master/public/wc-2018-squads.json');

  return {
    type: FETCH_PLAYERS,
    payload: prom
  };
}

export function samplePlayer(previousPlayer) {

  console.log(previousPlayer);

  return {
    type: SAMPLE_PLAYER,
    payload: previousPlayer
  }
}

