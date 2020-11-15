import { fork } from 'redux-saga/effects';
import beersSaga from './beersSaga';

export { default as beersSaga } from './beersSaga';

export function* rootSaga() {
  yield fork(beersSaga);
}