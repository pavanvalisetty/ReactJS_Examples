import React from "react";

const Footer = (props) => {
  return (
    <React.Fragment>
      <footer>
        <center>
          <h3>
            {" "}
            Developer with &hearts; by Developed by &copy; {props.year}{" "}
            {props.month}{" "}
          </h3>
        </center>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
