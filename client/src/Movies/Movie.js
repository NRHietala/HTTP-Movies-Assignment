import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie({ addToSavedList, setMovieList }) {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const history = useHistory();
  
  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(id);
  }, [id]);

  const handleEditClick = () => {
    history.push(`/update-movie/${id}`)
  }

  const handleDeleteClick = () => {
    axios
    .delete(`http://localhost:5000/api/movies/${id}`)
    .then(res => {
      console.log('success')
      setMovieList(JSON.parse(res.data))
      history.push('/')
    })
    .catch(err => {
      console.log(err)
    })
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
      <button onClick={handleEditClick}>Edit Movie</button>
      <button onClick={handleDeleteClick}>Delete Movie</button>
    </div>
  );
}

export default Movie;
