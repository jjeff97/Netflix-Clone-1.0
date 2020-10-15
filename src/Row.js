import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // a snippet of code that runs based on a specific variable
  useEffect(() => {
    //if [], run once when loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/*row_posters*/}
        {movies.map(movie => (
          <img src={movies.poster_path} alt={movie.name} />
        ))}
        
        </div>
 </div>
  );
}

export default Row;
