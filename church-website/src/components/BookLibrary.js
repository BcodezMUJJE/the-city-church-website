import React, { useState, useEffect } from "react";
import "./BookLibrary.css";
import Footer from "./Footer"; // Import Footer component
import img1 from "../Assets/boookkk.jpg";

// Sample Data with Image URLs
const books = [
  { id: 1, title: "The Bible", author: "Various Authors", description: "The holy book of Christianity.", image: img1 },
  { id: 2, title: "Mere Christianity", author: "C.S. Lewis", description: "A classic book on Christian apologetics.", image: img1 },
  { id: 3, title: "The Purpose Driven Life", author: "Rick Warren", description: "A guide to understanding God’s purpose for your life.", image: img1 },
  { id: 4, title: "The Case for Christ", author: "Lee Strobel", description: "A journalist investigates the evidence for Jesus.", image: img1 },
  { id: 5, title: "Knowing God", author: "J.I. Packer", description: "A deep dive into the nature and character of God.", image: img1 },
  { id: 6, title: "The Pilgrim's Progress", author: "John Bunyan", description: "An allegorical novel about the Christian journey.", image: img1 },
  { id: 7, title: "The Hiding Place", author: "Corrie ten Boom", description: "A story of faith and forgiveness during World War II.", image: img1 },
  { id: 8, title: "The Screwtape Letters", author: "C.S. Lewis", description: "A series of letters from a senior demon to a junior demon.", image: img1 },
  { id: 9, title: "The Great Divorce", author: "C.S. Lewis", description: "A theological dream vision about heaven and hell.", image: img1 },
  { id: 10, title: "The Pursuit of God", author: "A.W. Tozer", description: "A Christian classic on the pursuit of intimacy with God.", image: img1 },
  { id: 11, title: "The Cost of Discipleship", author: "Dietrich Bonhoeffer", description: "A challenging book on what it means to be a disciple of Christ.", image: img1 },
  { id: 12, title: "Desiring God", author: "John Piper", description: "A book on Christian hedonism and the pursuit of joy in God.", image: img1 },
];

// SearchBar Component
function SearchBar({ onSearch, onClear, query, setQuery }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(query); }} className="search-bar">
      <input
        type="text"
        placeholder="Search books by title or author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
      {query && <button type="button" onClick={onClear}>Clear</button>}
    </form>
  );
}

// BookList Component
function BookList({ books }) {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <h2>{book.title}</h2>
            <p className="author">By {book.author}</p>
            <p className="description">{book.description}</p>
          </div>
        ))
      ) : (
        <p className="no-results">No books found.</p>
      )}
    </div>
  );
}

// Main Book Component
function Book() {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const storedQuery = localStorage.getItem("searchQuery");
    if (storedQuery) {
      setQuery(storedQuery);
      handleSearch(storedQuery);
    }
  }, []);

  const handleSearch = (query) => {
    localStorage.setItem("searchQuery", query);
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const handleClear = () => {
    setQuery("");
    setFilteredBooks(books);
    localStorage.removeItem("searchQuery");
  };

  return (
    <div className="library-app">
      <h1>City Church Library</h1>
      <SearchBar onSearch={handleSearch} onClear={handleClear} query={query} setQuery={setQuery} />
      <BookList books={filteredBooks} />
      <Footer /> {/* Footer placed correctly here */}
    </div>
  );
}

export default Book;
