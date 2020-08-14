import React from "react";
import ReactDOM from "react-dom";
import "../../src/index.css";

import * as serviceWorker from "../serviceWorker";

import Home from "./Home";
import Profile from "./Profile";
import Post from "./Post";
import Header from "./Header";
import PostDetials from "./PostDetails";
import { BrowserRouter, Route, Link } from "react-router-dom";

import ProfileDetails from "./ProfileDetails";

const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/post" component={Post}></Route>
        <Route path="/post/:topic" component={PostDetials}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route path="/profile/:profiletopic" component={ProfileDetails}></Route>
      </div>
    </BrowserRouter>
  );
};
export default Routing;
