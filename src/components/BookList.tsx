import { Book, Books } from '../types';
import ShowBook from './ShowBook';
interface BookListProps {
  books: Books;
  onDelete: (id: number) => void;
  onEdit: (editedBook: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete,onEdit }) => {
  const renderedBooks = books.map((book: Book) => {
    return <ShowBook key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
