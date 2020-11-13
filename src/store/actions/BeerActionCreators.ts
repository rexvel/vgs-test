export const ADD_BEERS = "ADD_BEERS";
export const SET_BEERS = "SET_BEERS";
export const LOAD_BEERS = "LOAD_BEERS";

export const ADD_BERRYS = "ADD_BERRYS";
export const SET_BERRYS= "SET_BERRYS";
export const LOAD_BERRYS= "LOAD_BERRYS";

/*
action creators for beer`s data
*/

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

export const setBerry = (berrys) => ({
  type: SET_BERRYS,
  payload: berrys,
});


export const addBerry = (berrys) => ({
  type: ADD_BERRYS,
  payload: berrys,
});


export const loadBerry = () => ({
  type: LOAD_BERRYS,
});


