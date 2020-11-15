import { BeersActionsType } from './../../types';
import { BeersActionTypes } from '../../constants';

const initialState = {
  beersList: [],
  activeItem: null,
}

export const beersReducer = (state = initialState, { type, payload }:BeersActionsType) => {
  switch (type) {
    case BeersActionTypes.BEERS_DATA_SET:
      return {
        ...state,
        beersList: payload?.beersList ?? state.beersList,
      }
    // case BeersActionTypes.BEERS_ACTIVE_ITEM_SET:
    //   return {
    //     ...state,
    //     activeItem: payload?.activeItem ?? state.activeItem
    //   }
    case BeersActionTypes.BEERS_DATA_CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default beersReducer;
