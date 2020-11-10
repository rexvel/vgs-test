import Grid from '@material-ui/core/Grid';
import { Item } from 'components/Item/Item';
import React from "react";



const Result = ({ items }) => {


  console.log(items)
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="flex-start"
      style={{ minHeight: '100vh' }}>
      {items.map(item => {
        return (
          <Item item={item} />
        )
      })}
    </Grid>
  );
}

export default Result;
