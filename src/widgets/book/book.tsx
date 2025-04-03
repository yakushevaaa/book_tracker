import React from "react";
import { IBookProps } from "@/entities/book";
import { getGenreImage } from "./helpers";
import type { Genre } from "@/entities/book";
import checkIcon from "/icons/check.svg";
import deleteIcon from "/icons/delete.svg";
import "./book.scss";
import "./index";

export const Book: React.FC<IBookProps> = ({
  bookData,
  onDelete,
  onChecked,
}) => {
  const { id, title, author, genre, isRead } = bookData;
  const coverImage = getGenreImage(genre as Genre);
  return (
    <li className="book__item">
      <div className="book__img-container">
        <img className="book__img" src={coverImage} alt="Genre image" />
        <button className="book__button" onClick={() => onDelete(id)}>
          <img className="book__icon" src={deleteIcon} />
        </button>

        <button
          className={`book__button ${isRead ? "book__button--read" : ""}`}
          onClick={() => {
            if (!isRead) {
              onChecked(id);
        
            }
          }}
        >
          <img className="book__icon" src={checkIcon} />
        </button>
      </div>
      <div className="book__info">
        <h2 className="book__title">{title}</h2>
        <p className="book__genre">{genre}</p>
        <p className="book__author">{author}</p>
      </div>
    </li>
  );
};
