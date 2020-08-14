import React, { Component, Fragment } from "react";
import Banner from "./Banner";
import Artists from "./Artists";

const url = "http://localhost:8900/artists";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      artists: "",
    };
  }

  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        this.setState({ artists: data });
      })
      .catch(console.log);
  }
  render() {
    //console.log("artist info" + this.state.artists);
    return (
      <Fragment>
        <Banner></Banner>
        <Artists artistsdata={this.state.artists}></Artists>
      </Fragment>
    );
  }
}
export default Home;
