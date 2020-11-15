import { BeersActionTypes } from '../../constants';
import { BeersListType, BeersActionsType } from '../../types';

export const beersDataFetch = (name?: string): BeersActionsType => ({
  type: BeersActionTypes.BEERS_DATA_FETCH,
  payload: {
    name,
  }
});

export const beersDataSet = (beersList: BeersListType[]): BeersActionsType => ({
  type: BeersActionTypes.BEERS_DATA_SET,
  payload: {
    beersList,
  },
});

export const beersDataClear = (): BeersActionsType => ({
  type: BeersActionTypes.BEERS_DATA_CLEAR,
});
