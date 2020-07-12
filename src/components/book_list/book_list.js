import React from "react";
import BookItem from "../../components/bookitem/book_item";
import "./style.css";

export default function BookList(props) {
  const { items, active, handleUpdate, isSearch } = props;

  const booksToDisplay = isSearch
    ? items
    : items.filter((book) => (active === "all" ? book : book.shelf === active));

  return (
    <div className="books_list">
      {booksToDisplay && booksToDisplay.length > 0 ? (
        booksToDisplay.map((item) => {
          return (
            <BookItem key={item.id} item={item} onChanged={handleUpdate} />
          );
        })
      ) : (
        <div>
          <p>There are no items</p>
        </div>
      )}
    </div>
  );
}
