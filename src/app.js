import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Shelfs from "./data/shelf_items";
import * as BooksAPI from "./api/books_api";
import AppHeader from "./components/header/header";
import ShelfHeader from "./components/category_header/category_header";
import BookList from "./components/book_list/book_list";
import SearchField from "./components/search_field/search_field";

export default class App extends Component {
  state = {
    books: [],
    searchResults: [],
    error: false,
    shelfs: Shelfs,
    activeShelf: "all",
    loading: false,
    query: "",
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
    BooksAPI.getAll().then((items) => {
      this.setState(() => ({
        books: items,
        loading: false,
      }));
    });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);

    // ** Delete Element **
    if (shelf === "none") {
      this.setState((currentState) => ({
        books: currentState.books.filter((b) => {
          return b.id !== book.id;
        }),
      }));
    }

    // ** Update **
    // Step 1. Modify element
    // Step 2. Delete the current element
    // Step 3. Add again to the list
    else {
      let bookToModify = book;
      bookToModify.shelf = shelf;

      this.setState((currentState) => ({
        books: currentState.books
          .filter((item) => item.id !== bookToModify.id)
          .concat(bookToModify),
      }));
    }
  };

  searchForBook = (query) => {
    this.setState({
      query: query,
    });

    this.handleSearch(this.state.query);
  };

  handleSearch = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.setState({ searchResults: [], error: true });
        } else {
          // checking if the search result is from the latest search query.
          if (this.state.query.length === 0) {
            this.setState({ searchResults: [], error: false });
            return;
          }

          this.setState({ searchResults: books, error: false, query: query });
        }
      });
    } else {
      this.setState({ searchResults: [], error: false });
    }
  };

  updateShelfHeaderItem = (active) => {
    this.setState({
      activeShelf: active,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <AppHeader />
          <ShelfHeader
            shelfs={this.state.shelfs}
            active={this.state.activeShelf}
            onItemClicked={this.updateShelfHeaderItem}
          />
          {!this.state.loading ? (
            <BookList
              items={this.state.books}
              active={this.state.activeShelf}
              isSearch={false}
              error={false}
              handleUpdate={this.updateBook}
            />
          ) : (
            <p>Please wait while it load</p>
          )}
        </Route>
        <Route exact path="/search">
          <SearchField handleSearch={this.searchForBook} />
          <BookList
            items={this.state.searchResults.map((searchedBook) => {
              const myBook = this.state.books.filter(
                (myBook) => myBook.id === searchedBook.id
              )[0];
              searchedBook.shelf = myBook ? myBook.shelf : "none";
              return searchedBook;
            })}
            handleUpdate={this.updateBook}
            error={this.state.error}
            isSearch={true}
          />
        </Route>
      </BrowserRouter>
    );
  }
}
