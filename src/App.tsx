import { makeStyles } from '@material-ui/core/styles';
import Result from 'components/Results/Result';
import Search from 'components/Search/Search';
import React, { useEffect, useState } from "react";



const App = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "200px auto",
      width:" 30vw",
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


  async function getPokemon(): Promise<any> {
    try {
      let result = await fetch("https://pokeapi.co/api/v2/ability/?limit=50&offset=50/", {
        method: "GET"
      });
      const { results } = await result.json()
      //TODO make suitable function for delegating state management
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

      //TODO make suitable function for delegating state management
      const beer = results.sort(() => Math.random() - Math.random()).slice(0, 5)
      setBeerArray(beer)
    } catch (err) {
    }

  }


  useEffect(() => {
    getPokemon()
    getBeer();


  }, []);


  console.log(pokemonArray)
  console.log(beerArray)



  return (

    <div className={classes.root}>
      <Search />
      <Result items={pokemonArray} />
    </div>
  );
}

export default App;
