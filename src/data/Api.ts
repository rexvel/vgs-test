
//TODO axios

import apiConstants from "../constants";

const { BEER_URL, POKEMON_URL } = apiConstants

export const getBeersFromApi = async () => {
  const result = await fetch(BEER_URL)
  return result.json();
}

export const getBerryFromApi = async () => {
  const result = await fetch(POKEMON_URL)
  return result.json();
}