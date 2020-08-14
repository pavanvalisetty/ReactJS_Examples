import React, { Component } from "react";

const NewsList = (props) => {
  const renderList = props.newsdata.map((data, index) => {
    return (
      <div key={data.id}>
        <h2> {data.title}</h2>
        <h2> {data.feed}</h2>
      </div>
    );
  });
  return <div>{renderList}</div>;
};
export default NewsList;
