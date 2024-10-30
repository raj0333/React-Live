// src/AlbumList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = () => {
  const [albums, setAlbums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [albumsPerPage] = useState(10); // Change this to display more albums per page if needed
  const [totalAlbums, setTotalAlbums] = useState(0);

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      setAlbums(response.data);
      setTotalAlbums(response.data.length);
    };

    fetchAlbums();
  }, []);

  // Logic for displaying current albums
  const indexOfLastAlbum = currentPage * albumsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
  const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Render pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalAlbums / albumsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentAlbums.map(album => (
          <div key={album.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="font-semibold text-lg">{album.title}</h2>
            <p className="text-gray-600">Album ID: {album.id}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => paginate(number)} className="mx-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
