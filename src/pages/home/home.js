import React, { Component } from "react";
import Header from "../../components/header/header";
import CategoryHeader from "../../components/category_header/category_header";
import Books from "../../data/sample";
import "./style.css";
import BookItem from "../../components/bookitem/book_item";

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
        <div className="books_list">
          {this.state.books
            .filter((item) => {
              return this.state.active === "all"
                ? item
                : item.shelf === this.state.active;
            })
            .map((item) => {
              return <BookItem item={item} />;
            })}
        </div>
      </div>
    );
  }
}
