import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Restuarent from "./Restuarent";
import Home from "./Home";
const Routing = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/restuarent" component={Restuarent}></Route>
    </BrowserRouter>
  );
};

export default Routing;
