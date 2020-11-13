import { beerEnum, berryEnum } from "../../types/DataActionTypes.enum";

/*
action creators for beer`s data
*/

const { ADD_BEERS, SET_BEERS, LOAD_BEERS } = beerEnum;
export const addBeer = (beers) => ({
  type: ADD_BEERS,
  payload: beers,
});

export const setBeer = (beers) => ({
  type: SET_BEERS,
  payload: beers,
});

export const loadBeer = () => ({
  type: LOAD_BEERS,
});


/*
action creators for berry`s data
*/

