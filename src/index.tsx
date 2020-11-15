import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/AppRoot";
import { store } from "store/configureStore";
import history from './helpers/history';
import 'rsuite/dist/styles/rsuite-default.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <AppRoot />
    </Router>
  </Provider>,
  document.getElementById("root"),
);
