import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieListPage from './pages/MovieListPage';
import AddMoviePage from './pages/AddMoviePage';
import EditMoviePage from './pages/EditMoviePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/add" element={<AddMoviePage />} />
        <Route path="/edit/:id" element={<EditMoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;