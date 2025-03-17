import React, { useState } from "react";
import "./Book.css";

// Sample Data
const books = [
  { id: 1, title: "The Bible", author: "Various Authors", description: "The holy book of Christianity." },
  { id: 2, title: "Mere Christianity", author: "C.S. Lewis", description: "A classic book on Christian apologetics." },
  { id: 3, title: "The Purpose Driven Life", author: "Rick Warren", description: "A guide to understanding God’s purpose for your life." },
  { id: 4, title: "The Case for Christ", author: "Lee Strobel", description: "A journalist investigates the evidence for Jesus." },
  { id: 5, title: "Knowing God", author: "J.I. Packer", description: "A deep dive into the nature and character of God." },
];

// SearchBar Component
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search books by title or author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

// BookList Component
function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <h2>{book.title}</h2>
          <p className="author">By {book.author}</p>
          <p className="description">{book.description}</p>
        </div>
      ))}
    </div>
  );
}

// Main Book Component
function Book() {
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (query) => {
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="library-app">
      <h1>City Church Library</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default Book;

