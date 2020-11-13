import { berryEnum } from "../actions/DataActionTypes.enum";

const { ADD_BERRYS, SET_BERRYS } = berryEnum

const initialState = {
  berrys: []
}

export const berrysReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BERRYS: {
      return { ...state, berrys: [...state.berrys, action.payload] }
    }
    case SET_BERRYS: {
      return { ...state, berrys: action.payload }
    }
    default:
      return state
  }
}
