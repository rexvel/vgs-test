import Grid from '@material-ui/core/Grid';
import { Item } from 'components/Beers/BeersListItem';
import React from "react";


const BeersList = ({ items }) => {
console.log(items)


  console.log(items)
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="flex-start"
      style={{ minHeight: '100vh' }}>
      {items.map((item, index) => {
        console.log(index)
        return (
          <Item item={item} />
        )
      })}
    </Grid>
  );
}

export default BeersList;
