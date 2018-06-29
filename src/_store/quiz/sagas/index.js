import { takeEvery } from 'redux-saga/effects'
import { samplePlayer } from './player';
import { SAMPLE_PLAYER } from '../types';

export default function* root() {
  yield takeEvery(SAMPLE_PLAYER, samplePlayer);
}