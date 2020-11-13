import IBerryState from 'types/BerryState.interface.';
import IBeerState from './BeerState.interface'

export default interface IAppState {
  beerState: IBeerState;
  berryState: IBerryState;
}
