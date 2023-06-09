import axios from 'axios';
import { useState, useEffect } from 'react';
import BookList from './components/BookList';
import { Book, Books } from './types';
import CreateBook from './components/CreateBook';
const url = 'http://localhost:3001/books';

const App = () => {
  const [books, setBooks] = useState<Books>([]);
  const fetchBooks = async () => {
    const response = await axios.get<Books>(url);
    setBooks(response.data);
  };
  const createBook = async (title: string) => {
    const response = await axios.post<Book>(url, {
      title,
    });
    setBooks([...books, response.data]);
  };
  const deleteBook = async (id: number) => {
    await axios.delete<{}>(`${url}/${id}`);
    const updatedBooks = books.filter((book: Book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const editBook = async (editedBook: Book) => {
    const response = await axios.put<Book>(`${url}/${editedBook.id}`, {
      title: editedBook.title,
    });
    const updatedBooks = books.map((book: Book) => {
      if (book.id === editedBook.id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  useEffect((): void => {
    fetchBooks();
  }, []);
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <CreateBook onSubmit={createBook} />
    </div>
  );
};

export default App;
