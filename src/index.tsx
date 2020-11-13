import { Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/AppRoot";
import { store } from "store/configureStore";
import history from './helpers/history';

ReactDOM.render(

  <Provider store={store}>
    <Router history={history} >
      <AppRoot />
    </Router>
  </Provider>,

  document.getElementById("root"));
