import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiBookOpen } from 'react-icons/bi'; 
import './BooksPage.css';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://softwium.com/api/books');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className="books-page">
      <h1 className="page-title">Discover Books</h1>
      <div className="book-list">
        {books.map(book => (
          <Link to={`/books/${book.id}`} key={book.id} className="book-link">
            <div className="book-item">
              <div className="book-thumbnail">
                <img src={book.imageUrl || `https://source.unsplash.com/900x700/?book=${book.id}`} alt={book.title} />
              </div>
              <div className="book-details">
                <BiBookOpen size={24} className="book-icon" />
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
