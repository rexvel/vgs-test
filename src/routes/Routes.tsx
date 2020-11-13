import AppContainer from 'AppContainer';
import { Test } from 'components/Test';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routePaths from './routePaths';

const Routes: React.FC = () => (
    <Switch>
      <Route exact path={routePaths.homePage()} component={AppContainer} />
      <Route path={routePaths.itemComponent()} component={Test} />
    </Switch>
);

export default Routes;
