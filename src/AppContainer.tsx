import React, { SetStateAction, useEffect, useState } from 'react';
import { getData } from 'utils/request-data';
import { apiUrl } from './constants/apiConstants';
import App from 'App';

const AppContainer: React.FC = () => {

  const { POKEMON_URL, BEER_URL } = apiUrl



  const [pokemonArray, setPokemonArray] = useState([]);
  const [beerArray, setBeerArray] = useState([]);
  const [beersList, setbeersList] = useState([])

  const updateBeerList = (childData: SetStateAction<never[]>) => setbeersList(childData)

  useEffect(() => {
    getData(BEER_URL, setBeerArray)
    getData(POKEMON_URL, setPokemonArray)
  }, []);

  useEffect(() => {
    const arrayItems: React.SetStateAction<never[]> = [];

    pokemonArray.forEach((i, idx) => {
      arrayItems.push(i);
      arrayItems.push(beerArray[idx]);
    });
    setbeersList(arrayItems);

  }, [pokemonArray, beerArray])



  console.log(pokemonArray)
  console.log(beerArray)
  console.log(beersList)

  return (

    <>
      <App updateBeerList={updateBeerList} beersList={beersList} />
    </>
  );
}

export default AppContainer;
