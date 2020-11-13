import DataActionTypes from "./DataActionTypes.enum";
import IBeer from '../../types/IBeer.interface';


export interface IGetBeersStartAction {
  type: DataActionTypes.GET_BEER_REQUEST_API_DATA,
  isFetching: true,
}

export interface IGetbBeersSuccessAction {
  type: DataActionTypes.GET_BEER_SUCCESS,
  beers: IBeer[],
  isFetching: false,
}
export interface IGetCharactersFailureAction {
  type: DataActionTypes.GET_BEER_FAILURE,
  isFetching: false,
}
