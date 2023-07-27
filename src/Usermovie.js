import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Userheader";
import axios from "axios";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const UserMovie = () => {
  const [movies, setMovies] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); 

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

  return (
    <div>
      <Header />
      <Container maxWidth="md" className="my-5">
        <h2 className="mb-3" style={{ marginLeft: "330px" }}>
          Movies List
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {movies.map((movie) => (
            <Card
              key={movie.id}
              sx={{
                minWidth: 275,
                margin: "10px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Genre: {movie.genre}
                </Typography>
                <Typography variant="body2">{movie.about}</Typography>
                {isLoggedIn ? (
                  // If user is logged in, show "Watch Now" button
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ marginTop: "10px" }}
                  >
                    Watch Now
                  </Button>
                ) : (
                  // If user is not logged in, show "Login to Watch" button
                  <Link to="/home">
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ marginTop: "10px" }}
                    >
                      Login to Watch
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default UserMovie;
