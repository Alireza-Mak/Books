import React, { useState } from 'react';
import { Book } from '../types';
interface EditBookProps {
  book: Book;
  onEdit: (editedBook: Book) => void;
}
const EditBook: React.FC<EditBookProps> = ({ book, onEdit }) => {
  const [title, setTitle] = useState<string>(book.title);
  const handleEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title && title.length > 0) {
      onEdit({ id: book.id, title });
      setTitle('');
    }
  };
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitle(value);
  };
  return (
    <form onSubmit={handleEdit} className="book-edit">
      <label>Title</label>
      <input
        className="input"
        onChange={onChangeTitle}
        type="text"
        value={title}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default EditBook;
