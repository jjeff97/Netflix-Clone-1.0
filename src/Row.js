import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({ title , fetchUrl}) {

  const [movies, setMovies] = useState([]);

// a snippet of code that runs based on a specific variable
useEffect(() => {
//if [], run once when loads, and dont run again
async function fetchData () {
  const request = await axios.get(fetchUrl);
}
}, []);

  return (
    <div>
      <h2>{title}</h2>

      {/* container -> posters */}
    </div>
  );
}

export default Row;
