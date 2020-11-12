import Grid from '@material-ui/core/Grid';
import { BeersListItem } from 'components/Beers/BeersListItem';
import React from "react";


interface IBeerList {
  beersList: Array<any>,
}

const BeersList = ({ beersList }: IBeerList) => {
  console.log(beersList)


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
}

export default BeersList;
