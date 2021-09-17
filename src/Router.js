import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Post from "./Pages/Post";
import NotFound from "./Pages/NotFound";

const Router = (props) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/profile' component={Profile} />
    <Route path='/post/:id' component={Post} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
