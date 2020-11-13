import React from "react";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card/Card';
import { Link } from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent/CardContent';


type NestedBeerItem = {
  name: string,
  description: string,
  url: string,
}

type BeersItem = {
  item: NestedBeerItem,
}

export const BeersListItem: React.FC<BeersItem> = ({ item }) => {

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
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const UpdatedItem: React.FC<BeersItem>= ({ item }) => {

  const classes = useStyles();

  const { name, description } = item;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <Link to={'item'} >{name}</Link>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
