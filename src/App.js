import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Users from './Userslist'; 
import Movies from './Movies'; 
import MovieAdd from './MovieAdd'; 
import Home from './Home';
import Form from './Form';
import Usermovie from './Usermovie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movieadd" element={<MovieAdd />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/usermovie" element={<Usermovie />} />
      </Routes>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/login">
          <button style={{ marginRight: "20px" }}>Login</button>
        </Link>
        <Link to="/usermovie">
          <button>User Movies</button>
        </Link>
      </div>
    </Router>
  );
}

export default App;
