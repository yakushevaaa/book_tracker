import { IGetBookData } from "@/entities/book";
import { bookListData } from "@/widgets/book-tracker/config";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BooksState {
  books: IGetBookData[];
}

const initialState: BooksState = {
  books: bookListData,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IGetBookData>) => {
      state.books.push(action.payload);
    },

    deleteBook: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },

    markAsRead: (state, action: PayloadAction<number>) => {
      state.books = state.books.map((book) =>
        book.id === action.payload ? { ...book, isRead: true } : book
      );
    },
  },
});

export const { addBook, deleteBook, markAsRead } = booksSlice.actions;
export default booksSlice.reducer;
