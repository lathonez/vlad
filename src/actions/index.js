export const FETCH_PLAYER = 'fetch_player';

export function fetchPlayer() {

  const player = {
      "number": 1,
      "position": "GK",
      "name": "Essam El-Hadary",
      "dateOfBirth": "15 January 1973",
      "caps": 158,
      "goals": 0,
      "clubCountry": "Saudi Arabia",
      "club": "Al-Taawoun",
      "country": "Egypt",
      "group": "A"
    };

  return {
    type: FETCH_PLAYER,
    payload: player
  };
}
