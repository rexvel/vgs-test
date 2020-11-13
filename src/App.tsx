import React from 'react';
import BeersSearch from 'components/BeersSearch';
import BeersList from 'components/BeersList';
import { connect } from "react-redux";
import { loadBeer } from 'store/actions/BeerActionCreators';
import IAppState from './types/AppState.interface';
import { useEffect } from 'react';
import _ from 'lodash';
import { loadBerry } from 'store/actions/BerryActionCreators';


type AppProps = {
  beersList: any
  updateBeerList: Function,
  getBeers: Function,
  getBerrys: Function,
  beers: any,
  berrys: any
}


const App: React.FC<AppProps> = ({ getBeers, getBerrys, beers, berrys, updateBeerList, beersList }) => {

  // const [beersList, setbeersList] = useState([])

  // const updateBeerList = (childData: SetStateAction<never[]>) => setbeersList(childData)

  useEffect(() => {
    getBeers()
    getBerrys()
  }, [getBeers, getBerrys])
  const arrayItems: any = [];


  const beerArray = _.sampleSize(beers, 3)
  const berryArray = _.sampleSize(berrys, 3)

  for (let i = 0; i < 3; i++) {
    arrayItems.push(beerArray[i]);
    arrayItems.push(berryArray[i]);
  }

  console.log(arrayItems)

  const AppWrapper = {
    margin: "200px auto",
    width: "30vw",
  }
  return (

    <div style={AppWrapper}>
      <BeersSearch updateBeerList={updateBeerList} />
      {
        arrayItems.length > 0
          ? (
            <BeersList beersList={beersList} />
          )
          : <p>loading</p>
      }
    </div>
  );
}

const mapStateToProps = (store: IAppState) => {
  return {
    beers: store.beerState.beers,
    berrys: store.berryState.berrys,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBeers: () => dispatch(loadBeer()),
    getBerrys: () => dispatch(loadBerry()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
