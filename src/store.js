import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import componentWithDevTools from "redux-devtools-extension"

const store = createStore(
    rootReducer,
    componentWithDevTools,
    compose(applyMiddleware(thunk))
  );


export default store;