import React, { Component } from "react";
// Component Imports
import Header from "../components/header/header";
import ShelfHeader from "../components/category_header/category_header";
import BookList from "../components/book_list/book_list";
import { getAll, update } from "../api/books_api";

export default class Home extends Component {
  state = {
    books: [],
    active: "all",
  };

  handleShelfItemClick = (active) => {
    this.setState({
      active: active,
    });
  };

  // Lifecycle method to help us fetch data from server
  componentDidMount() {
    getAll().then((items) => {
      this.setState(() => ({
        books: items,
      }));
    });
  }

  // An Utlity to update the state when the book is updated
  handleBookChange = (book, shelf) => {
    update(book, shelf);

    if (shelf === "none") {
      // Delete element

      this.setState((currentState) => ({
        books: currentState.books.filter((b) => {
          return b.id !== book.id;
        }),
      }));
    } else {
      let bookToModify = book;
      bookToModify.shelf = shelf;

      // Step 1. Modify element
      // Step 2. Delete the current element
      // Step 3. Add again to the list

      this.setState((currentState) => ({
        books: currentState.books
          .filter((item) => item.id !== bookToModify.id)
          .concat(bookToModify),
      }));
    }
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
        <ShelfHeader
          shelfs={shelfs}
          active={this.state.active}
          onItemClicked={this.handleShelfItemClick}
        />
        <BookList
          items={this.state.books}
          active={this.state.active}
          handleUpdate={this.handleBookChange}
        />
      </div>
    );
  }
}
