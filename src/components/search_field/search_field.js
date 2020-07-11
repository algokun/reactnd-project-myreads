import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class SearchField extends Component {
  state = {
    query: "",
  };

  handleOnChanged = (event) => {
    const value = event.target.value;

    this.setState({
      query: value,
    });

    this.props.handleSearch(value);
  };

  render() {
    return (
      <div className="search_field_wrapper">
        <div className="back">
          <Link to="/">
            <span role="img" aria-label="back">
              👈
            </span>
            Go Back
          </Link>
        </div>
        <input
          type="text"
          placeholder="🔍  Search for title or author"
          value={this.state.query}
          onChange={this.handleOnChanged}
        />
      </div>
    );
  }
}
