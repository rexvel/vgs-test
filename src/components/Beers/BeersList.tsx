import Grid from '@material-ui/core/Grid';
import IAppState from '../../store/IAppState.interface';
import { BeersListItem } from 'components/Beers/BeersListItem';
import { connect } from 'react-redux';
import React from "react";
import { loadBeer, loadBerry } from 'store/actions/BeerActionCreators';
import { useEffect } from 'react';


interface IBeerList {
  beersList: Array<any>,
  getBeers: Function,
  getBerrys: Function,

}

export const BeersList = ({ beersList, getBeers,getBerrys }: IBeerList) => {
  console.log(beersList)



  useEffect(() => {
    getBeers()
    getBerrys()
  }, [getBeers,getBerrys])



  console.log(beersList)
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="flex-start"
      style={{ minHeight: '100vh' }}>
      {beersList.map((item) => {
        return (
          <BeersListItem item={item} key={item.name} />
        )
      })}
    </Grid>
  );



  // Connect the app aware container to the store and reducers

}

const mapStateToProps = (store: IAppState) => {
  return {
    beers: store.beerState.beers,
    isFetching: store.beerState.isFetching,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBeers: () => dispatch(loadBeer()),
    getBerrys: () => dispatch(loadBerry()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BeersList);
