import { makeStyles } from '@material-ui/core/styles';
import Search from 'components/Beers/BeersItemsSearch';
import Result from 'components/Beers/BeersList';
import React, { useCallback, useEffect, useState } from 'react';
import { getData } from 'utils/request-data';

const App = () => {

  const pokemonUrl = "https://pokeapi.co/api/v2/ability/?limit=50&offset=50/"
  const beerUrl = "https://api.punkapi.com/v2/beers"
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
  const [data, setData] = useState([])


  const handleCallback = useCallback(childData => {

    console.log(childData)
    if (childData) {
      setData(childData)
    }


  }, [data])

  useEffect(() => {
    getData(beerUrl, setBeerArray)
    getData(pokemonUrl, setPokemonArray)
  }, []);

  useEffect(() => {
    const arrayItems = [].concat.apply([], pokemonArray.map((i, index) => [i, beerArray[index]]));
    setData(arrayItems);
  }, [pokemonArray, beerArray])



  console.log(pokemonArray)
  console.log(beerArray)
  console.log(data)

  return (

    <div className={classes.root}>
      <Search handleCallback={handleCallback} />
      <Result items={data} />
    </div>
  );
}

export default App;
