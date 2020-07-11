import React, { Component } from "react";
import Header from "../../components/header/header";
import Books from "../../data/sample";

export default class home extends Component {
  state = {
    books: Books["books"],
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.books.map((item) => {
          return <div>{item.title}</div>;
        })}
      </div>
    );
  }
}
