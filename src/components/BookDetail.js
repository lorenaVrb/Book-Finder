import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { stripHtmlTags } from '../utils'; // Import the utility function


const DetailContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const DetailImage = styled.img`
  width: 150px;
`;

const DetailTitle = styled.h1``;
const DetailAuthors = styled.h2``;
const DetailDescription = styled.p``;

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBook = async () => {
      try {
        // Fetch book details using the bookId from the URL
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        setBook(response.data); // Directly set the book data
      } catch (error) {
        console.error('Error fetching book details:', error);
      } finally {
        setLoading(false);
      }
    };

    getBook();
  }, [bookId]);

  if (loading) return <p>Loading...</p>;

  if (!book) return <p>Book not found.</p>;

  const { volumeInfo } = book;
  const { title, authors, description, imageLinks } = volumeInfo;

  const cleanDescription = stripHtmlTags(description);

  return (
    <DetailContainer>
    {imageLinks && <DetailImage src={imageLinks.thumbnail} alt={title} />}
    <DetailTitle>{title}</DetailTitle>
    <DetailAuthors>{authors && authors.join(', ')}</DetailAuthors>
    <DetailDescription>{cleanDescription}</DetailDescription> {/* Use cleanDescription */}
  </DetailContainer>
  );
};

export default BookDetail;

