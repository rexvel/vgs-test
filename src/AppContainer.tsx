import React, { SetStateAction, useEffect, useState } from 'react';
import { getData } from 'utils/request-data';
import apiConstants from './constants';
import App from 'App';
import { Provider } from "react-redux";
import { store } from "./store/configureStore";


const AppContainer: React.FC = () => {

  const { POKEMON_URL, BEER_URL } = apiConstants

  const [pokemonArray, setPokemonArray] = useState([]);
  const [beerArray, setBeerArray] = useState([]);
  const [beersList, setbeersList] = useState([])

  const updateBeerList = (childData: SetStateAction<never[]>) => setbeersList(childData)

  useEffect(() => {
    getData(BEER_URL, setBeerArray)
    getData(POKEMON_URL, setPokemonArray)
  }, [POKEMON_URL,BEER_URL]);

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

    <Provider store={store}>
      <App updateBeerList={updateBeerList} beersList={beersList} />
    </Provider>
  );
}

export default AppContainer;
