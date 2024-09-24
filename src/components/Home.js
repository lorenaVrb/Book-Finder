import React from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import Loader from '../components/Loader';

const Home = ({ onSearch, loading, books, hasSearched }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {loading ? <Loader /> : <BookList books={books} hasSearched={hasSearched} />} {/* Pass hasSearched here */}
    </div>
  );
};

export default Home;
