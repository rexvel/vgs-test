import { BEER_URL, POKEMON_URL } from "../constants";

const getBeersFromApi = async (name?: string):Promise<any> => {
  const result = await fetch(BEER_URL(name));

  return result.json();
}

const getBerryFromApi = async (name?: string):Promise<any> => {
  const result = await fetch(POKEMON_URL(name));

  return result.json();
}

export default { getBeersFromApi, getBerryFromApi };