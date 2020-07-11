import React from "react";
import BookShelfChanger from "../bookshelf_changer/bookshelf_changer";

const BookItem = (props) => {
  const { item } = props;
  return (
    <div className="book_item" key={item.id}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageLinks.smallThumbnail})`,
          marginBottom: "1rem",
        }}
      ></div>
      <div>
        <div className="book_title">{item.title}</div>
        <div className="book_author">{item.authors[0]}</div>
        <BookShelfChanger value={item.shelf} onMove={(x, y) => {}} />
      </div>
    </div>
  );
};

export default BookItem;
