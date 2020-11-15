import React from "react";
import { Row, Panel, Tag } from "rsuite";
import { Link } from 'react-router-dom';
import FlexboxGrid from "rsuite/lib/FlexboxGrid/FlexboxGrid";
import { routePaths } from "routes";

const beerRowStyles = {
  marginBottom: 10,
}
const colorsByType = {
  beer: "orange",
  pokemon: "green",
}

export type BeersListItemType = {
  name: string;
  id: string;
  type: string;
}

export const BeersListItem: React.FC<BeersListItemType> = ({ name, id, type }) => {

  return (
    <Row style={beerRowStyles} key={id}>
      <Panel bordered>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={6}>
            <Tag color={colorsByType[type]}>{type}</Tag>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={18}>
            <Link to={routePaths.beersItemPage(id)} >{name}</Link>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Panel>
    </Row>
  );
}

export default BeersListItem;