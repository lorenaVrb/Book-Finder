import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
      setQuery('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container>
      <Input
        type="text"
        value={query}
        onKeyDown={handleKeyPress}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter book title or author"
        aria-label="Search for books"
      />
      <Button onClick={handleSearch}>Search</Button>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Input = styled.input`
  padding: 12px 20px;
  font-size: 18px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  margin-right: 10px;
  width: 10em;
`;

const Button = styled.button`
  padding: 1em 1em;
  font-size: 18px;
  border: none;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
