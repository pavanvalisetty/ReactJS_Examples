import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyHeader from "./Component/Header";
import Footer from "./Component/Footer";

// App equal to Home.js page for Aakash class
const App = () => {
  return (
    <div className="App">
      <MyHeader />
      <header>
        <h2> App Component Content</h2>
      </header>
      <Footer year="2020" month="July" />
    </div>
  );
};
/*
function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <h1> First Display on Heading</h1>
      </header>
    </div>
  );
}*/

export default App;
