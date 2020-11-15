import React from "react";
import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectItemById } from '../store/selectors';
import { routePaths } from '../routes';
import { Row, Panel, FlexboxGrid, Tag } from "rsuite";

const colorsByType = {
  beer: "orange",
  pokemon: "green",
}

const BeersItemStyles: any = {
  display: "flex",
  flexDirection: "column",
  textAlign:"center"
}


const BeersItemContainer: React.FC = () => {
  const { id } = useParams();
  const currentItem = useSelector(selectItemById(id));

  if (!currentItem)
    return <Redirect to={routePaths.homePage()} />

  const { name, type, description } = currentItem

  return (
    <FlexboxGrid justify="center" style={{ margin: "0 auto", width: "50%", height: "100%" }} align="middle" >
      <Row key={id} style={BeersItemStyles} >
        <h3>{name}</h3>
        <Panel bordered>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={6}>
              <Tag color={colorsByType[type]}>{type}</Tag>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={18}>
              {description}
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Panel>
      </Row>
    </FlexboxGrid>
  );
}

export default BeersItemContainer;
