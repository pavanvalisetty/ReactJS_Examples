import React from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div>
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3>Posts</h3>
        </div>
        <div className="panel-body">
          <div className="jumbotron">
            <h2>Post of </h2>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
          <h3>JavaScript</h3>
          <Link to="/profile/javascript">Details</Link>
          <h3>NodeJS</h3>
          <Link to="/profile/node">Details</Link>
          <h3>React</h3>
          <Link to="/profile/react">Details</Link>
          <h3>Angular</h3>
          <Link to="/profile/angular">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
