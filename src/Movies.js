import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Container from "@mui/material/Container";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:3030/movies");
      setMovies(response.data);
    } catch (error) {
      console.error("Failed to fetch movies.", error);
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/movies/${id}`);
      fetchMovies(); // Refresh the movies list after deletion
    } catch (error) {
      console.error("Failed to delete movie.", error);
    }
  };

  return (
    <div>
      <Header />
      <Container maxWidth="md" className="my-5">
        <h2 style={{marginLeft:'330px'}}>Movies List</h2>
        <div className="d-flex justify-content-end mb-3">
          <button  className="black-button" onClick={() => window.location.replace("/movieadd")}>
            Add Movie
          </button>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>About</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.about}</td>
                <td>
                  <button
                    onClick={() => handleDeleteMovie(movie.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default Movies;
