import { berryEnum } from "../../types/DataActionTypes.enum";

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


