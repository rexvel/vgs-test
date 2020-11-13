import { takeLatest, put, call } from "redux-saga/effects"
import { setBerry } from './../actions/BeerActionCreators';
import { getBerryFromApi } from "data/Api"
import { beerEnum, berryEnum } from "../actions/DataActionTypes.enum";

const { LOAD_BERRYS, } = berryEnum


export function* loadBerryWatcher() {
  yield takeLatest(LOAD_BERRYS, loadBerryWorker)
}


function* loadBerryWorker(): any {
  const result = yield call(getBerryFromApi)
  yield put(setBerry(result))
}
