import axios from 'axios';

export async function fetchBooks(query) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    // Return the items found, filtering out those without a description
    return (response.data.items || []).filter(item => item.volumeInfo.description);
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
}

