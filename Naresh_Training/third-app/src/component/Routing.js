import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import ArtistDetails from "./ArtistDetails";
import FormsComponent from "./FormsComponent";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/artist/:id" component={ArtistDetails}></Route>
      <Route exact path="/form" component={FormsComponent}></Route>
    </BrowserRouter>
  );
};

export default Routing;
