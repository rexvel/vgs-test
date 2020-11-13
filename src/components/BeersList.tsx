import { BeersListItem } from 'components/BeersListItem';
import React from "react";


interface IBeerList {
  beersList: Array<any>,
}


const BeerListStyle = {
  marginTop:"50px",
}

export const BeersList = ({ beersList }: IBeerList) => {

  console.log(beersList)
  return (
    <div style={BeerListStyle}>
      {beersList.map((item) => {
        return (
          <BeersListItem item={item} key={item.name} />
        )
      })}
    </div>
  );
}


export default BeersList