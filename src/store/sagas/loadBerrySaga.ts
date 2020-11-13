import { takeLatest, put, call } from "redux-saga/effects"
import { getBerryFromApi } from "data/Api"
import { berryEnum } from "../../types/DataActionTypes.enum";
import { setBerry } from "store/actions/BerryActionCreators";

const { LOAD_BERRYS, } = berryEnum

function* loadBerryWorker(): any {
  const result = yield call(getBerryFromApi);
  yield put(setBerry(result));
};

export function* loadBerryWatcher() {
  yield takeLatest(LOAD_BERRYS, loadBerryWorker);
};