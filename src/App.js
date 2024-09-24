import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { fetchBooks } from './api/bookApi';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import BookDetail from './components/BookDetail';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // Track search state

  const handleSearch = async (query) => {
    setLoading(true);
    setHasSearched(true); // Set hasSearched to true when a search is made
    try {
      const fetchedBooks = await fetchBooks(query);
      console.log('Fetched books:', fetchedBooks);
      setBooks(fetchedBooks.filter(book => book.volumeInfo.description));
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router basename="/Book-Finder">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Routes>
            <Route path="/" element={<Home onSearch={handleSearch} loading={loading} books={books} hasSearched={hasSearched} />} />
            <Route path="/book/:bookId" element={<BookDetail />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
  );
};

export default App;

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
