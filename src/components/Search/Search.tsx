import { Input } from '@material-ui/core';
import React, { useState } from 'react';
function Search({ handleCallback }) {


  const [updatedData, setUpdatedData] = useState([])

  async function getPokemon(info): Promise<any> {

    try {
      let result = await fetch(`https://pokeapi.co/api/v2/berry/${info}`, {
        method: "GET"
      });
      const res = await result.json()


      console.log(res.name)
      handleCallback([{name:res.name}])




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
        handleCallback(result)
      }
      console.log(updatedData)
      //TODO make suitable function for delegating state management

    } catch (err) {
    }

  }



  const handleKeyDown = (e) => {
    e.persist();

    if (e.key === 'Enter') {
      const name = e.target.value;
      console.log(e.target.value)
      setTimeout(() => {
        getPokemon(name)
        getBeer(name)
        handleCallback(updatedData)
      }, 1000);

    }
  }
  return(
    <Input id="standard-search" fullWidth placeholder="Search field" type="search" onKeyDown={handleKeyDown} />
  )
}




export default Search;