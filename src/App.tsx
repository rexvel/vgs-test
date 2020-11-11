import React, {  useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BeersItemsSearch from 'components/Beers/BeersItemsSearch';
import Result from 'components/Beers/BeersList';
import { getData } from 'utils/request-data';
import { BEER_URL, POKEMON_URL } from './constants/apiConstants';
const App = () => {

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

  const [pokemonArray, setPokemonArray] = useState([]);
  const [beerArray, setBeerArray] = useState([]);
  const [beersList, setbeersList] = useState([])

  const updateBeerList = childData =>  setbeersList(childData)

  useEffect(() => {
    getData(BEER_URL, setBeerArray)
    getData(POKEMON_URL, setPokemonArray)
  }, []);

  useEffect(() => {
    const arrayItems = [].concat.apply([], pokemonArray.map((i, index) => [i, beerArray[index]]));
    setbeersList(arrayItems);
  }, [pokemonArray, beerArray])



  console.log(pokemonArray)
  console.log(beerArray)
  console.log(beersList)

  return (

    <div className={classes.root}>
      <BeersItemsSearch updateBeerList={updateBeerList} />
      <Result beersList={beersList} />
    </div>
  );
}

export default App;
