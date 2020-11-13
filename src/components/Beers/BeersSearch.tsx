import { Input } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import _ from "lodash";
import { getPokemon, getBeer } from 'utils/request-data';

// Split on container && view
interface IBeersItem {
  updateBeerList: Function,
}

const Search = ({ updateBeerList }: IBeersItem) => {


  const [userQuery, setUserQuery] = useState("");

  const debouncedGetPokemon = useRef(_.debounce(info => getPokemon(info, updateBeerList), 1000)).current;
  const debouncedGetBeer = useRef(_.debounce(info => getBeer(info, updateBeerList), 1000)).current;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const typedValue = e.target.value;
    setUserQuery(typedValue);
    debouncedGetBeer(typedValue);
    debouncedGetPokemon(typedValue);
  };

  return (
    <div>
      <Input id="standard-search" fullWidth placeholder="Search field" type="search" onChange={onChange} value={userQuery} />
    </div>
  );
}




export default Search;