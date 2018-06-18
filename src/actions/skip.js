import { SKIP } from './index';

export function skip() {
  return {
    type: SKIP,
    payload: null
  }
}
