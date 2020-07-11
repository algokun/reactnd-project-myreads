import React from "react";
import BookShelfChanger from "../bookshelf_changer/bookshelf_changer";
import "./style.css";

const BookItem = (props) => {
  const { item } = props;
  return (
    <div className="book_item" key={item.id}>
      <div
        className="book_cover"
        style={{
          backgroundColor: "var(--primary)",
          width: "100%",
          height: 200,
          marginBottom: 10,
          borderRadius: 10,
          backgroundImage: `url(${item.imageLinks.smallThumbnail})`,
        }}
      ></div>
      <div>
        <div className="book_title">{item.title}</div>
        <div className="book_author">
          {item.authors.map((item) => {
            return item + ", ";
          })}
        </div>
        <BookShelfChanger value={item.shelf} onMove={(x, y) => {}} />
      </div>
    </div>
  );
};

export default BookItem;
