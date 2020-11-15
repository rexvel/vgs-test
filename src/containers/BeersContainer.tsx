import React, { useLayoutEffect, useState, useEffect } from "react";
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useDispatchAction, useDebounce } from '../hooks'
import { selectBeerList } from '../store/selectors';
import { beersDataFetch } from '../store/actions';
import Beers from "components/Beers";

type BeersContainer = {
  renderedData: {
    id: string,
    name: string,
  };
}
const initialBeersListLength = 5;

const BeersContainer: React.FC = () => {
  const beersList = useSelector(selectBeerList);
  const fetchBeersData = useDispatchAction(beersDataFetch);

  const [searchValue, setSearchValue] = useState<string>("");
  const [currentBeersList, setCurrentBeersList] = useState<any>([]);

  const handleSearchChange = useDebounce((value: string): void => {
    setSearchValue(value);
  });

  useLayoutEffect(() => {
    fetchBeersData();
  }, [fetchBeersData]);

  useEffect(() => {
    if (!searchValue) {
      setCurrentBeersList(_.sampleSize(beersList, initialBeersListLength));
      return;
    }
    setCurrentBeersList(beersList);
  }, [beersList, searchValue]);

  useEffect(() => {
    fetchBeersData(searchValue);
  }, [searchValue,fetchBeersData]);

  console.log(beersList);

  return (

    <Beers currentBeersList={currentBeersList} handleSearchChange={handleSearchChange} />
  );
}

export default BeersContainer;
