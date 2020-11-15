import React from "react";
import { Row, FlexboxGrid, Content, Divider,  Input } from "rsuite";
import BeersListItem from "./BeersListItem";
import Header from "../components/Header";


const inputStyles = {
  marginBottom: 10,
  marginTop: 10,
};

type BeersType = {
  currentBeersList: any;
  handleSearchChange(): Function;
}

const Beers: React.FC<BeersType> = ({ currentBeersList,
  handleSearchChange,
}) => {

  return (
    <>
      <Header title="Beers List" />
      <Content>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <Row>
              <Input onChange={handleSearchChange} size="lg" placeholder="Search" style={inputStyles} />
            </Row>
            <Divider />
            {
              currentBeersList.map(({ name, id, type }) => (
                <BeersListItem name={name} id={id} type={type} key={name} />
              ))
            }
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </>
  );
}

export default Beers;