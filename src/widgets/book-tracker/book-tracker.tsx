import { Book } from "../book";
import "./book-tracker.scss";
import { IGetBookData } from "@/entities/book";
import { AddBookModal } from "../add-book-modal";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux";
import { addBook, deleteBook, markAsRead } from "@/features/books/slice";

export const BookTracker: React.FC<{
  isModalOpen: boolean;
  switchModal: () => void;
}> = ({ isModalOpen, switchModal }) => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books.books);
  const readBooks = books.filter((book) => book.isRead);

  const handleDeleteBook = (id: number) => {
    dispatch(deleteBook(id));
  };

  const handleCheckedBook = (id: number) => {
    dispatch(markAsRead(id));
  };

  const handleAddBook = (newBook: IGetBookData) => {
    dispatch(addBook(newBook));
    switchModal();
  };

  return (
    <>
      <div className="info">
        <h1 className="info__title">Books</h1>
        <p className="info__count">{readBooks.length} Book(s) read</p>
      </div>

      <ul className="book-list">
        {books.map((book) => (
          <Book
            key={book.id}
            bookData={book}
            onDelete={handleDeleteBook}
            onChecked={handleCheckedBook}
          />
        ))}
      </ul>
      {isModalOpen && (
        <AddBookModal
          booksList={books}
          onClose={switchModal}
          onSave={handleAddBook}
        />
      )}
    </>
  );
};
