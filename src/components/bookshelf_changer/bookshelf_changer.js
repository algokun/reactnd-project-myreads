import React, { Component } from "react";

class BookshelfChanger extends Component {
  state = {
    value: this.props.value,
  };
  
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
    this.props.onChanged(this.props.book, value);
  };
  
  render() {
    return (
      <div className="book_shelf_changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;
