import React, { SetStateAction, useEffect, useState } from 'react';
import {Router} from 'react-router-dom'
import { getData } from 'utils/request-data';
import apiConstants from './constants';
import {  Provider } from "react-redux";
import { store } from "./store/configureStore";
import history from './helpers/history';
import App from 'App';

const AppContainer: React.FC = () => {

  const [beersList, setbeersList] = useState([])


  const { POKEMON_URL, BEER_URL } = apiConstants

  const [pokemonArray, setPokemonArray] = useState([]);
  const [beerArray, setBeerArray] = useState([]);


  useEffect(() => {
    getData(BEER_URL, setBeerArray)
    getData(POKEMON_URL, setPokemonArray)
  }, [POKEMON_URL, BEER_URL]);


  const updateBeerList = (childData: SetStateAction<never[]>) => setbeersList(childData)

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

      <App updateBeerList={updateBeerList} beersList={beersList} />

  );
}

export default AppContainer;

