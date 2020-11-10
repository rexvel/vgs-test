import Container from '@material-ui/core/Container';
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  const [pokemonArray, setPokemons] = useState([]);
  const [beerArray, setBeerArray] = useState([]);


  async function getPokemon():Promise<any> {
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

  async function getBeer():Promise<any> {
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
    <Container component="main" maxWidth="xs">
      init
    </Container>
  );
}

export default App;
