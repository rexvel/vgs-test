import { getBeersFromApi } from "data/Api";
import { call, put, takeLatest } from 'redux-saga/effects';
import { setBeer } from "store/actions/BeerActionCreators";

import { beerEnum, berryEnum } from "../actions/DataActionTypes.enum";

const { LOAD_BEERS,  } = beerEnum

export function* loadBeerWatcher() {
  yield takeLatest(LOAD_BEERS, loadBeerWorker)
}


function* loadBeerWorker(): any {
  const result = yield call(getBeersFromApi)
  yield put(setBeer(result))
}
