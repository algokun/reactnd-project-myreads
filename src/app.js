import React, { Component } from "react";
// Component Imports
import Header from "./components/header/header";
import ShelfHeader from "./components/category_header/category_header";
import BookList from "./components/book_list/book_list";
import { getAll } from "./api/books_api";

export default class home extends Component {
  state = {
    books: [],
    active: "all",
  };

  handleShelfItemClick = (active) => {
    this.setState({
      active: active,
    });
  };

  componentDidMount() {
    getAll().then((items) => {
      this.setState(() => ({
        books: items,
      }));
    });
  }

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
        <ShelfHeader
          shelfs={shelfs}
          active={this.state.active}
          onItemClicked={this.handleShelfItemClick}
        />
        <BookList items={this.state.books} active={this.state.active} />
        {console.log(this.state.books)}
      </div>
    );
  }
}
