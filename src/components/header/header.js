import React from "react";
import "./style.css";

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
      Want to find something to read? <a href="#">Click Here</a>
    </div>
  </header>
);

export default header;
