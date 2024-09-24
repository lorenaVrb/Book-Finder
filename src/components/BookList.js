import React from 'react';
import styled from 'styled-components';
import BookCard from './BookCard';

const BookList = ({ books, hasSearched }) => (
  <Container>
    {books && books.length > 0 ? (
      books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))
    ) : (
      hasSearched && <Message>No results found. Please try another search.</Message> // Only show if hasSearched is true
    )}
  </Container>
);

export default BookList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const Message = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;
