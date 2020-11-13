import { setBerry } from './../actions/BeerActionCreators';
import { getBerryFromApi } from "data/Api"
import { takeLatest, put , call} from "redux-saga/effects"
import { LOAD_BERRYS,  } from "store/actions/BeerActionCreators"




export function* loadBerryWatcher() {
  yield takeLatest(LOAD_BERRYS, loadBerrySaga)
}


function* loadBerrySaga():any {
  const result = yield call(getBerryFromApi)
  yield put(setBerry(result))
}
