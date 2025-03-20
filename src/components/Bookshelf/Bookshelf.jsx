import { useState } from "react";
import React from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({
      title: "",
      author: "",
    });
    //console.log(books);
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => {
          return (
            <div className="bookCard" key={index}>
              <h3>Title: {book.title}</h3>
              <p>Author: {book.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookshelf;