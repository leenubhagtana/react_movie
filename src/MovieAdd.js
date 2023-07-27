import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Header from "./Header";

const MovieAdd = () => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    about: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send movie data to the server using Axios
      const response = await axios.post("http://localhost:3030/movies", formData);

      console.log("Movie added successfully!", response.data);

      // Reset the form after successful submission
      setFormData({
        title: "",
        genre: "",
        about: "",
      });
      navigate("/movies");
    } catch (error) {
      console.error("Failed to add movie.", error);
    }
  };

  return (
    <div>
      <Header/>
    <Container maxWidth="sm"> {/* Set the maximum width of the container */}
      <div className="my-5"> {/* Add some vertical margin */}
        <h2 style={{marginLeft:'200px'}}>Add a Movie</h2>
        <form onSubmit={handleSubmit} style={{marginTop:'50px'}}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="form-control"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Genre:
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              required
              className="form-control"
              value={formData.genre}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="about" className="form-label">
              About:
            </label>
            <textarea
              id="about"
              name="about"
              required
              className="form-control"
              value={formData.about}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-dark" style={{marginLeft:'240px'}}>
            Add Movie
          </button>
        </form>
      </div>
    </Container>

    </div>
    
  );
};

export default MovieAdd;
