import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
  const { volumeInfo } = book;
  const { title, authors, description, imageLinks } = volumeInfo;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <Card onClick={handleClick}>
      {imageLinks && <Image src={imageLinks.thumbnail} alt={title} />}
      <Title>{title}</Title>
      <Authors>{authors && authors.join(', ')}</Authors>
      <Description>{description}</Description>
    </Card>
  );
};

export default BookCard;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  width: 250px;
  height: 350px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Authors = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;
