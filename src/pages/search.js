import React, { Component } from "react";
import SearchField from "../components/search_field/search_field";
import BookItem from "../components/bookitem/book_item";
import { search, update } from "../api/books_api";

export default class Search extends Component {
  state = {
    searchResult: [],
    error: false,
  };

  handleSearchQuery = (value) => {
    if (value.length > 0) {
      this.handleSearch(value);
    } else {
      this.setState({
        searchResult: [],
        error: false,
      });
    }
  };

  handleSearch = (value) => {
    search(value).then((result) => {
      if (result.error) {
        this.setState({
          searchResult: [],
          error: true,
        });
      }
      this.setState({
        searchResult: result,
        error: false,
      });
    });
  };

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
    return (
      <div>
        <SearchField handleSearch={this.handleSearchQuery} />
        <div className="books_list">
          {typeof this.state.searchResult != undefined &&
          this.state.searchResult.length > 0 ? (
            this.state.searchResult.map((item) => {
              return <BookItem item={item} key={item.id} />;
            })
          ) : this.state.error ? (
            <div>
              <p>OOPS! There are no items found</p>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}
