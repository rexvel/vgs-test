import IBerryState from 'types/IBerryState.interface.';
import IBeerState from '../types/IBeerState.interface'

export default interface IAppState {
  beerState: IBeerState;
  berryState: IBerryState;
}
