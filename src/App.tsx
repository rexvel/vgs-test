import React, { } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BeersSearch from 'components/Beers/BeersSearch';
import BeersList from 'components/Beers/BeersList';


interface AppProps {
  updateBeerList: Function,
  beersList: Array<any>,
}

const App: React.FC<AppProps> = ({ updateBeerList, beersList }: AppProps) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "200px auto",
      width: "30vw",
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <BeersSearch updateBeerList={updateBeerList} />
      <BeersList beersList={beersList} />
    </div>
  );
}

export default App;
