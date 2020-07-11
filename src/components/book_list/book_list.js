import React from "react";
import BookItem from "../../components/bookitem/book_item";
import "./style.css";

export default function BookList(props) {
  const { items, active } = props;
  return (
    <div className="books_list">
      {items
        .filter((item) => {
          return active === "all" ? item : item.shelf === active;
        })
        .map((item) => {
          return <BookItem item={item} />;
        })}
    </div>
  );
}
