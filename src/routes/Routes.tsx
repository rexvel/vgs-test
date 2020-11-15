import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routePaths from './routePaths';
import { BeersContainer, BeersItemContainer } from '../containers';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={routePaths.homePage()} component={BeersContainer} />
    <Route path={routePaths.beersItemPage(":id")} component={BeersItemContainer} />
  </Switch>
);

export default Routes;
