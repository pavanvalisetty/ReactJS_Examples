import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      title: "My Test App - State Props Explanation",
      counter: 0,
      searchText: "",
      value: "coconut",
    };
  }
  OnButtonClick = (event) => {
    this.setState({ counter: this.state.counter + 1 });
  };
  OnChangedValue = (event) => {
    this.setState({
      searchText: event.target.value ? event.target.value : "",
    });
    this.props.userText(event.target.value);
  };
  handleChange = (event) => {
    this.setState({
      searchText: event.target.value ? event.target.value : "",
    });
    this.props.userText(event.target.value);
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
          <select value={this.state.value} onChange={this.handleChange}>
            {" "}
            <option value="REACT">REACT</option>
            <option value="developer">developer</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </center>
      </header>
    );
  }
}

export default Header;
