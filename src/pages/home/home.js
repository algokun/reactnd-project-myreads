import React, { Component } from "react";
import Header from "../../components/header/header";
import CategoryHeader from "../../components/category_header/category_header";
import Books from "../../data/sample";

export default class home extends Component {
  state = {
    books: Books["books"],
    active: "all",
  };

  handleShelfItemClick = (active) => {
    this.setState({
      active: active,
    });
  };

  render() {
    const shelfs = [
      {
        name: "All",
        shelf: "all",
      },
      {
        name: "Currently Reading",
        shelf: "currentlyReading",
      },
      {
        name: " Want to Read",
        shelf: "wantToRead",
      },
      {
        name: "Read",
        shelf: "read",
      },
    ];

    return (
      <div>
        <Header />
        <CategoryHeader
          shelfs={shelfs}
          active={this.state.active}
          onItemClicked={this.handleShelfItemClick}
        />
        {this.state.books
          .filter((item) => {
            return this.state.active == "all"
              ? item
              : item.shelf == this.state.active;
          })
          .map((item) => {
            return <p>{item.title}</p>;
          })}
      </div>
    );
  }
}
