import React from "react";
import "./style.css";

export default function CategoryHeader(props) {
  const { shelfs, active, onItemClicked } = props;
  return (
    <div className="category_header">
      <ul>
        {shelfs.map((shelf) => {
          return (
            <li key={shelf.shelf}>
              <button
                onClick={() => onItemClicked(shelf.shelf)}
                className={
                  shelf.shelf === active
                    ? "category_item active"
                    : "category_item"
                }
              >
                {shelf.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
