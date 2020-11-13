import IBerryState from './BerryState.type.';
import IBeerState from './BeerState.type'

export default interface IAppState {
  beerState: IBeerState;
  berryState: IBerryState;
}
