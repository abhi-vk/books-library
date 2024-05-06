import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksPage from './Components/BooksPage/BooksPage';
import BookDetailsPage from './Components/BookDetailsPage/BookDetailsPage';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;