import React from "react";

const ProfileDetails = (props) => {
  console.log(props);
  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3>Profile Details</h3>
      </div>
      <div className="panel-body">
        <div className="jumbotron">
          <h2>Profile Details for {props.match.params.profiletopic}</h2>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfileDetails;
