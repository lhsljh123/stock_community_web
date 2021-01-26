import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import loadable from "@loadable/component"
import Header from "../components/organisms/Header"
const AuthRouter = loadable(() => import("./AuthRouter.js"))
const BoardRouter = loadable(() => import("./BoardRouter.js"))
const Home = loadable(() => import("../pages/Home.js"))

const Router = () => {
  
  return (
    <BrowserRouter basename="/" >
      <Header/>
      <Switch>
        <Route path="/auth" component={AuthRouter} />
        <Route path="/board" component={BoardRouter} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;