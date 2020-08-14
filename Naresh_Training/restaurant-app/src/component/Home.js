import React, { Fragment } from "react";
import Restuarent from "./Restuarent";

const URL = "http://localhost:8900/restaurant";
class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      restuarents: "",
    };
  }

  render() {
    return (
      <Fragment>
        <Restuarent restuarentData={this.state.restuarents}></Restuarent>
      </Fragment>
    );
  }
  componentDidMount() {
    fetch(URL, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ restuarents: data });
      });
  }
}
export default Home;
