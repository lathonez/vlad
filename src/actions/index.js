import axios from 'axios';

export const FETCH_PLAYER = 'fetch_player';

export function fetchPlayer() {

  const prom = axios.get('https://raw.githubusercontent.com/lathonez/vlad/master/public/wc-2018-squads.json');

  return {
    type: FETCH_PLAYER,
    payload: prom
  };
}
