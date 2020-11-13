import { beerEnum, berryEnum } from "./DataActionTypes.enum";

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

const { SET_BERRYS, ADD_BERRYS, LOAD_BERRYS } = berryEnum


export const setBerry = (berrys) => ({
  type: SET_BERRYS,
  payload: berrys.results,
});


export const addBerry = (berrys) => ({
  type: ADD_BERRYS,
  payload: berrys,
});


export const loadBerry = () => ({
  type: LOAD_BERRYS,
});


