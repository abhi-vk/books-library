import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetailsPage.css';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://softwium.com/api/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error(`Error fetching book with ID ${id}:`, error);
      }
    };

    fetchBookDetails();

    
    return () => {
      setBook(null);
    };
  }, [id]); 

  if (!book) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="book-details-page">
      <div className="book-image">
        <img src={book.imageUrl || 'https://source.unsplash.com/random/900×700/?books'} alt={book.title} />
      </div>
      <div className="book-info">
        <h2>{book.title}</h2>
        <p><strong>ISBN:</strong> {book.isbn}</p>
        <p><strong>Page Count:</strong> {book.pageCount}</p>
        <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
      </div>
    </div>
  );
};

export default BookDetailsPage;
