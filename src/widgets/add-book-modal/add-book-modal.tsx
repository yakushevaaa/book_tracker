import React, { useState } from "react";
import "./add-book-modal.scss";
import { genres } from "./config";
import { IGetBookData } from "@/entities/book";
import deleteIcon from "/icons/delete.svg";

export const AddBookModal: React.FC<{
  booksList: IGetBookData[];
  onClose: () => void;
  onSave: (book: IGetBookData) => void;
}> = ({ booksList, onClose, onSave }) => {
  const getId = () => {
    return booksList.length > 0
      ? Math.max(...booksList.map((book) => book.id)) + 1
      : 1;
  };

  const [book, setBook] = useState<IGetBookData>({
    id: getId(),
    title: "",
    author: "",
    genre: "Fantasy",
    isRead: false,
  });

  const [isValid, setIsValid] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBook((prev) => {
      const newBook = { ...prev, [name]: value };
      setIsValid(newBook.title.trim() !== "" && newBook.author.trim() !== "");
      return newBook;
    });
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="background" onClick={handleBackgroundClick}>
      <div className="modal">
        <div className="modal__header">
          <h2 className="modal__title">Add new Book</h2>
          <button className="modal__delete-btn" onClick={onClose}>
            <img src={deleteIcon} alt="delete" />
          </button>
        </div>

        <input
          className="modal__input"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <input
          className="modal__input"
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
          required
        />
        <div className="modal__genre-container">
          {genres.map((genre) => (
            <label
              key={genre}
              className={`modal__genre ${
                book.genre == genre ? "modal__genre--selected" : ""
              } `}
            >
              <input
                type="radio"
                name="genre"
                value={genre}
                checked={book.genre === genre}
                onChange={handleChange}
              />
              {genre}
            </label>
          ))}
        </div>
        <button
          className="modal__add-btn"
          onClick={() => onSave(book)}
          disabled={!isValid}
        >
          Add book
        </button>
      </div>
    </div>
  );
};
