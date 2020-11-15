import { takeEvery, call, put } from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';
import faker from 'faker';
import { BeersActionTypes } from '../../constants';
import { BeersListType } from '../../types';
import { beersDataSet } from './../actions/beersActions';
import Api from '../../data/Api';


function* beersDataFetchSaga({ payload }:any) {
  const searchName = payload?.name;
  let beersResponse:any = [];
  let pokemonResponse:any = {}

  try{
    beersResponse = yield call(Api.getBeersFromApi,searchName);
  }catch(err){
    console.warn(err);
  }

  try{
    pokemonResponse = yield call(Api.getBerryFromApi,searchName);
  }catch(err){
    console.warn(err);
  }

  const results = pokemonResponse?.results ?? [];


  const normalizedBeers: BeersListType[] =
    beersResponse.map(({ name, description }) => ({ name, id: uuid(), type: "beer", description }));
  const normalizedBerrys: BeersListType[] =
    results.map(({ name, }) => ({ name, id: uuid(), type: "pokemon", description: faker.commerce.productDescription() }));

  yield put(beersDataSet([...normalizedBeers, ...normalizedBerrys]))
};


export default function* beersSaga() {
  yield takeEvery(BeersActionTypes.BEERS_DATA_FETCH, beersDataFetchSaga);
}