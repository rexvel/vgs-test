import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import React from "react";


interface INestedBeerItem {
  name: string,
  description: string,
  url: string,
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



const useStyles = makeStyles({
  root: {
    minWidth: 275,
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




export const UpdatedItem = ({ item }: IBeersItem) => {

  const classes = useStyles();


  const { name, description, url } = item;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <Link to={'item'} >{name}</Link>
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {description}
        </Typography>
        <Typography variant="body2" component="p">

        </Typography>
      </CardContent>
    </Card>
  );
}