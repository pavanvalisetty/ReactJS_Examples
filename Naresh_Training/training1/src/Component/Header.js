import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      title: "My Test App - State Props Explanation",
      counter: 0,
      searchText: "",
    };
  }
  OnButtonClick = (event) => {
    this.setState({ counter: this.state.counter + 1 });
  };
  OnChangedValue = (event) => {
    this.setState({
      searchText: event.target.value ? event.target.value : "",
    });
  };
  render() {
    console.log("inside render");
    return (
      <header>
        <center>
          <div className="logo">{this.state.title}</div>
          <input type="text" onChange={this.OnChangedValue} />
          <p>Type Text :{this.state.searchText}</p>
          <p> Counter : {this.state.counter}</p>
          <button type="button" onClick={this.OnButtonClick}>
            {" "}
            Click
          </button>
        </center>
      </header>
    );
  }
}

export default Header;
