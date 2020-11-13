import { ADD_BEERS, SET_BEERS } from 'store/actions/BeerActionCreators';

// Wrap array in obj
const initialState = {
  beers: [],
}

export const beersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BEERS: {
      return { ...state, beers: [...state.beers, action.payload] }
    }
    case SET_BEERS: {
      return { ...state, beers: [...state.beers, action.payload] }
    }
    default:
      return state
  }
}


export default beersReducer