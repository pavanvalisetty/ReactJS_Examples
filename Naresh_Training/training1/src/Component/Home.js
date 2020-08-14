import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import JSON from "../db.json";
import NewsDisplay from "./NewsDisplay";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      news: JSON,
      filtered: JSON,
    };
  }

  filterNews(keyword) {
    // this.console.log(keyword);
    const output = this.state.news.filter((data) => {
      return data.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
    this.setState({ filtered: output });
  }
  render() {
    console.log(this.state.news);
    return (
      <div className="App">
        <Header
          userText={(data) => {
            this.filterNews(data);
          }}
        />
        <NewsDisplay newsdata={this.state.filtered} />
        <Footer year="2020" month="July" />
      </div>
    );
  }
}
export default Home;
