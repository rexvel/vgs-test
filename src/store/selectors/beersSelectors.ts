import { createSelector } from 'reselect';
import _ from 'lodash';

const beersSelector = state => state.beers;

export const selectBeerList = createSelector(
  beersSelector,
  beersState => beersState.beersList,
);

export const selectItemById = id => createSelector(
  selectBeerList,
  beersList => _.find(beersList, ['id', id]),
);
