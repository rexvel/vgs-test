import { beerEnum } from "../../types/DataActionTypes.enum";

const { ADD_BEERS, SET_BEERS } = beerEnum
const initialState = {
  beers: [],
}

export const beersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BEERS: {
      return { ...state, beers:[...state.beers, action.payload] }
    }
    case SET_BEERS: {
      return { ...state, beers: action.payload }
    }
    default:
      return state;
  }
};

export default beersReducer;