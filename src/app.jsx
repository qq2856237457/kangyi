import React, {Component} from "react";
import {Provider} from "react-redux"
import {BrowserRouter, Route} from "react-router-dom"

import {GlobalStyled} from './style.js';
import {GlobalStyled1} from './static/iconfont/iconfont'
import Header from "./common/header";
import store from "./store";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Register from "./pages/register";
import Recommend1 from "./pages/recommends/recommend1";
import Recommend2 from "./pages/recommends/recommend2";
import Recommend3 from "./pages/recommends/recommend3";
import Recommend4 from "./pages/recommends/recommend4";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyled/>
        <GlobalStyled1/>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/register' exact component={Register}></Route>
            <Route path='/recommend1' exact component={Recommend1}></Route>
            <Route path='/recommend2' exact component={Recommend2}></Route>
            <Route path='/recommend3' exact component={Recommend3}></Route>
            <Route path='/recommend4' exact component={Recommend4}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}