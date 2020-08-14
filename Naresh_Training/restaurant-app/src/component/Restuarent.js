import React from "react";
import { Link } from "react-router-dom";

const Restuarent = (props) => {
  console.log(props);
  const listRestuarent = ({ restuarentData }) => {
    if (restuarentData) {
      return restuarentData.map((item) => {
        const style = {
          background: `url('/images/covers/${item.cover}.jpg')`,
        };
        return (
          <Link to="/" key={item.id} className="artist_item" style={style}>
            <div>{item.name}</div>
          </Link>
        );
      });
    }
  };
  return (
    <div>
      <h4> Browse List</h4>
      {listRestuarent(props)}
    </div>
  );
};
export default Restuarent;
