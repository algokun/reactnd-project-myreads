import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const header = (props) => (
  <header>
    <div className="title">
      <h2>
        <span role="img" aria-label="hi">
          👋
        </span>{" "}
        Hi There,
        <br />
        Reader
      </h2>
    </div>
    <div>
      <span role="img" aria-label="search">
        🔍
      </span>{" "}
      Want to find something to read? <Link to="/search">Click Here</Link>
    </div>
  </header>
);

export default header;
