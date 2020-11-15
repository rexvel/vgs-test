export type BeersListType = {
  id: string,
  name: string,
  description?: string,
  url?: string,
};

export type BeersActionsType = {
  type: string,
  payload?: {
    beersList?: BeersListType[]
    name?: string,
  }
}