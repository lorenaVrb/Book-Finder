// src/components/SearchResults.js
import React from 'react';
import styled from 'styled-components';

const SearchResults = ({ results }) => {
  const filteredResults = results.filter(result => result.description); // Only include results with a description

  return (
    <ResultsContainer>
      {filteredResults.map(result => (
        <Card key={result.id}>
          <Title>{result.title}</Title>
          <Description>{result.description}</Description>
        </Card>
      ))}
    </ResultsContainer>
  );
};

export default SearchResults;
