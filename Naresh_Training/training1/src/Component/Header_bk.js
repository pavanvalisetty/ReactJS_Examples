import React from "react";

const myStyles = {
  header: {
    backgroundColor: "tomato",
  },
  logo: {
    textAlign: "center",
    color: "#fff",
    fontSize: "30px",
  },
};
const Header = () => {
  return (
    <header style={myStyles.header}>
      <div style={myStyles.logo}>React App</div>
      <center>
        <input type="text" />
      </center>
      <h1> First Header </h1>
      <h1> Second Header </h1>;
    </header>
  );
};
export default Header;
