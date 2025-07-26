import React, { useState, useEffect } from "react";
import "./BookLibrary.css";
import Footer from "./Footer"; // Import Footer component
import img1 from "../Assets/boookkk.jpg";
import img2 from "../Assets/Bk_Fel.png";
import img3 from "../Assets/Bk_Prie.png"; 
import img4 from "../Assets/Bk_Alex.jpg"; 
import img5 from "../Assets/Bk_AL3.jpg"; 
import img6 from "../Assets/Derick.jpeg"; 
import img7 from "../Assets/Lydia.png"; 
import img8 from "../Assets/Gibu.png"; 
import img9 from "../Assets/Baale.png"; 
import img10 from "../Assets/Moris.png"; 
import img11 from "../Assets/Tushabe.png"; 
import img12 from "../Assets/Wamibi.png";
import img13 from "../Assets/Mudeda.png";

// Sample Data with Image URLs
const books = [
  { id: 1, title: "Power For Living", author: "Dr. Alex Mutagubya", description: "The holy book of Christianity.", image: img1 },
  { id: 2, title: "Unhindered", author: "Dr. Alex Mutagubya", description: "Overcoming The Control And Influence Of The Spirit.", image: img4 },
  { id: 3, title: "Ministry DNA", author: "Dr. Alex Mutagubya", description: "A guide to understanding God’s purpose for your life.", image: img5 },
  { id: 4, title: "Marriage For The Unmarried", author: "Dr. Alex Mutagubya", description: "A journalist investigates the evidence for Jesus.", image: img1 },
  { id: 6, title: "Digital Discipleship", author: "Bwire Felix", description: "A Journey In Church Media.", image: img2 },
  { id: 7, title: "Through A Mum's Eyes", author: "Abote Priscilla Maloba", description: " Life Lessons for my son", image: img3 },
  { id: 8, title: "Over Coming Fear", author: "Derick Ongeiwun", description: "A guide to overcome your fears.", image: img6 },
  { id: 9, title: "The Art Of Serving Children", author: "Lydia Biira Kuhinira", description: "The world of children is a realm of endless curiosity, imagination and wonder", image: img7 },
  { id: 10, title: "Fruitfullness", author: "Gerald W. Gibu", description: "The call for every child of God.", image: img8 },
  { id: 11, title: "The Wilderness Experience", author: "Herny Baale", description: "A powerful book that talks about tough times in life.", image: img9 },
  { id: 12, title: "Godly Relatioships Leading to Marriage", author: "Morris Okwakol", description: "A Biblical perspective in today's contemporary relationships.", image: img10 },
  { id: 13, title: "The Battle Field", author: "Emmanuel Tushabe", description: "The Journey Of a Believer", image: img11 },
  { id: 14, title: "The Enemy Within", author: "David Wamimbi Mulaamya", description: "Victory Over Self", image: img12 },
  { id: 15, title: "Complete The Task", author: "Derick Mudeda", description: "Defying The Urge To Quit", image: img13 },
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
