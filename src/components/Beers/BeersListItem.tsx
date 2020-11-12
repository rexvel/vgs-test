import { Avatar, Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import { makeStyles } from '@material-ui/core/styles';
import React from "react";


interface INestedBeerItem {
  name: string,
}

interface IBeersItem {
  item: INestedBeerItem,
}

export const BeersListItem: React.FC<IBeersItem> = ({ item }: IBeersItem) => {

  const loading = item !== undefined;

  return (
    <>
      {
        loading
          ? <UpdatedItem item={item} />
          : <p>loading</p>
      }
    </>
  );
}


export const UpdatedItem = ({ item }: IBeersItem) => {

  const useStyles = makeStyles((theme) => ({

    item: {
      justifyContent: "space-between",
      width: "65%",
      margin: "0 auto"
    },
  }));
  const classes = useStyles();


  const { name } = item;

  return (
    <Box m={3} width="100%" >
      <Grid className={classes.item} container wrap="nowrap" spacing={5}>
        <Grid >
          <Avatar>W</Avatar>
        </Grid>
        <Grid  >
          <Typography noWrap>{name}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}