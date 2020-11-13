import { LOAD_BEERS } from '../actions/BeerActionCreators';
import { getBeersFromApi } from "data/Api";
import { call, put, takeLatest } from 'redux-saga/effects';
import { setBeer } from "store/actions/BeerActionCreators";


export function* loadBeerWatcher() {
  yield takeLatest(LOAD_BEERS, loadBeerSaga)
}


function* loadBeerSaga(): any {
  const result = yield call(getBeersFromApi)
  yield put(setBeer(result))
}
