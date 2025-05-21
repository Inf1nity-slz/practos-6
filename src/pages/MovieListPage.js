import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList from '../components/MovieList';
import CategoryFilter from '../components/CategoryFilter';

const MovieListPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(['all']);

  const [movies, setMovies] = useState(() => {
    return JSON.parse(localStorage.getItem('movies')) || [];
  });

  const categories = movies.length > 0
    ? [...new Set(movies.flatMap((m) => m.categories))]
    : [];

  const filteredMovies = (() => {
    if (filter.includes('all')) {
      return movies;
    }

    return movies.filter(movie =>
      movie.categories.some(category => filter.includes(category))
    );
  })();

  const deleteMovie = (id) => {
    const updated = movies.filter((m) => m.id !== id);
    localStorage.setItem('movies', JSON.stringify(updated));
    setMovies(updated);
  };

  return (
    <div className="container">
      <h1>Мои фильмы</h1>

      <div className="controls">
        <button onClick={() => navigate('/add')}>Добавить фильм</button>
        <CategoryFilter
          categories={categories}
          onFilterChange={(cat) => setFilter(cat)}
        />
      </div>

      <MovieList
        movies={filteredMovies}
        onDelete={deleteMovie}
        onEdit={(movie) => navigate(`/edit/${movie.id}`)}
      />
    </div>
  );
};

export default MovieListPage;