import {createStore,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from './reducer';
/*
* 引用redux-thunk和redux对项目的状态进行统一管理
* */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
));

export default store;