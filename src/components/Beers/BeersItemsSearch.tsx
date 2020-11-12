import { Input } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import _ from "lodash";
function Search({ updateBeerList }) {


  const [userQuery, setUserQuery] = useState("");

  const debouncedGetPokemon = useRef(_.debounce(info => getPokemon(info), 1000)).current;
  const debouncedGetBeer = useRef(_.debounce(info => getBeer(info), 1000)).current;

  const onChange = e => {
    const typedValue = e.target.value;
    setUserQuery(typedValue);
    debouncedGetBeer(typedValue);
    debouncedGetPokemon(typedValue);
  };

  async function getPokemon(info) {

    try {
      let result = await fetch(`https://pokeapi.co/api/v2/berry/${info}`, {
        method: "GET"
      });

      const res = await result.json()

      console.log(res.name)
      updateBeerList([{ name: res.name }])

    } catch (err) {
      console.error(err)
    }
  }

  async function getBeer(name): Promise<any> {
    try {
      let res = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${name}`, {
        method: "GET"
      });


      const result = await res.json();
      console.log(result)
      if (result.length > 0) {
        updateBeerList(result)
      }

    } catch (err) {
  }

  }

  return (
    <div>
      <Input id="standard-search" fullWidth placeholder="Search field" type="search" onChange={onChange} value={userQuery} />
    </div>
  );
}




export default Search;