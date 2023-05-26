import React, { useState } from 'react';
interface CreateBookProps {
  onSubmit: (title: string) => void;
  disable: boolean;
}
const CreateBook: React.FC<CreateBookProps> = ({ onSubmit, disable }) => {
  const [title, setTitle] = useState<string>('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title && title.length > 0) {
      onSubmit(title);
      setTitle('');
    }
  };
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitle(value);
  };
  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          className="input"
          onChange={onChangeTitle}
          type="text"
          value={title}
        />
        <button disabled={disable} className="button">
          Add book
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
