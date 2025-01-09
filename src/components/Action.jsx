import React from "react";
import { Link } from "react-router-dom";

function Action(props) {
  return (
    <Link to="/merch" className="action">
      {props.name}
    </Link>
  );
}

export default Action;
