import { makeStyles } from '@material-ui/core/styles';
import Result from 'components/Results/Result';
import Search from 'components/Search/Search';
import React, { useCallback, useEffect, useState } from 'react';



const App = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "200px auto",
      width: " 30vw",
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();


  const [pokemonArray, setPokemons] = useState([]);
  const [beerArray, setBeerArray] = useState([]);
  const [data, setData] = useState([])


  const handleCallback = useCallback(childData => {

    console.log(childData)
    if (childData){
      setData(childData)

    }


}, [data])


  async function getPokemon(): Promise<any> {
    try {
      let result = await fetch("https://pokeapi.co/api/v2/ability/?limit=50&offset=50/", {
        method: "GET"
      });
      const { results } = await result.json()
      const pokemons = results.sort(() => Math.random() - Math.random()).slice(0, 5)
      setPokemons(pokemons)

    } catch (err) {
      console.error(err)
    }
  }

async function getBeer(): Promise<any> {
  try {
    let res = await fetch("https://api.punkapi.com/v2/beers", {
      method: "GET"
    });

    const results = await res.json()

    const beer = results.sort(() => Math.random() - Math.random()).slice(0, 5)
    setBeerArray(beer)
  } catch (err) {
  }

}

useEffect(() => {
  getPokemon();
  getBeer();
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
