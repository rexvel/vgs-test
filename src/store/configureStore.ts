import { createStore, combineReducers, compose } from "redux";
import beersReducer from "./reducers/BeerReducer";
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from "redux";
import { berrysReducer } from "./reducers/BerryReducer";


export const rootReducer = combineReducers({
  beerState: beersReducer,
  berryState: berrysReducer
});


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga)