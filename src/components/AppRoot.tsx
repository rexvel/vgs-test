import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'rsuite';
import Routes from '../routes/Routes';

const AppRoot: React.FC = () => (
  <Container style={{height:"100vh"}}>
    <Route component={Routes} />
  </Container>
);

export default AppRoot;
