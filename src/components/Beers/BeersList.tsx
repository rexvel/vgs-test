import Grid from '@material-ui/core/Grid';
import { Item } from 'components/Beers/BeersListItem';
import React from "react";


const BeersList = ({ beersList }) => {
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
      {beersList.map((item, ) => {
        return (
          <Item item={item} key={item.name} />
        )
      })}
    </Grid>
  );
}

export default BeersList;
