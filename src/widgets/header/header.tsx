import React from "react";
import "./header.scss";

export const Header: React.FC<{ onAddBook: () => void }> = ({ onAddBook }) => {
  return (
    <header className="header">
      <img src="icons/logo.svg" alt="Logo" />
      <nav className="nav">
        <button className="nav__add-book-btn" onClick={onAddBook}>
          Add book
        </button>
        <a href="">
          <img src="icons/profile.svg" alt="Profile logo" />
        </a>
      </nav>
    </header>
  );
};
