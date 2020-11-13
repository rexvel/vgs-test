import { fork } from 'redux-saga/effects'
import { loadBeerWatcher } from './sagas/loadBeerSaga'
import { loadBerryWatcher } from './sagas/loadBerrySaga'

export default function* rootSaga() {
  yield fork(loadBeerWatcher)
  yield fork(loadBerryWatcher)
}