export const POKEMON_URL = (name: string = ""): string => `https://pokeapi.co/api/v2/berry/${name}`;

export const BEER_URL = (name: string = ""): string => `https://api.punkapi.com/v2/beers/${!!name ? `?beer_name=${name}` : '' }`;
