import { IBeers } from '../../types/Beers';


enum DataActionTypes {
  GET_BEER_REQUEST_API_DATA = "GET_BEER_REQUEST_API_DATA",
}

export default DataActionTypes;

export const GET_REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";





export interface GetBeersAction {
  type: typeof DataActionTypes.GET_BEER_REQUEST_API_DATA;
  payload: IBeers;

}

export type AppActions = GetBeersAction
