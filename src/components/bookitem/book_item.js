import React from "react";
import BookShelfChanger from "../bookshelf_changer/bookshelf_changer";
import "./style.css";

const BookItem = (props) => {
  const { item, onChanged } = props;
  return (
    <div className="book_item" key={item.id}>
      <div
        className="book_cover"
        style={
          typeof item.imageLinks.smallThumbnail != undefined
            ? {
                backgroundImage: `url(${item.imageLinks.smallThumbnail})`,
              }
            : {}
        }
      ></div>
      <div>
        <div className="book_title">{item.title}</div>
        <div className="book_author">
          {item.authors ? item.authors.join(", ") : "No Author"}
        </div>
        <BookShelfChanger
          book={item}
          value={item.shelf ?? "none"}
          onChanged={onChanged}
        />
      </div>
    </div>
  );
};

export default BookItem;
