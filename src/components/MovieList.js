import React from 'react';

const MovieList = ({ movies, onDelete, onEdit }) => {
  return (
    <div>
      {movies.length === 0 && <p>Нет фильмов</p>}
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="movie-info">
              <strong>ID:</strong> {movie.id}
            </div>
            <div className="movie-info">
              <strong>Название:</strong> {movie.title}
            </div>
            <div className="movie-info">
              <strong>Категории:</strong> {movie.categories.join(', ')}
            </div>
            <div className="movie-info">
              <strong>Описание:</strong> {movie.description}
            </div>
            <div className="movie-info">
              <strong>Оценка:</strong> {movie.rating}
            </div>
            <div className="movie-info">
              <strong>Год выхода:</strong> {movie.year}
            </div>
            <div className="movie-info">
              <strong>Режиссёр:</strong> {movie.director}
            </div>
            <div className="movie-info">
              <strong>Страна:</strong> {movie.country}
            </div>
            <div className="movie-info">
              <strong>Актёры:</strong> {movie.actors}
            </div>
            <div className="movie-actions">
              <button onClick={() => onEdit(movie)}>Редактировать</button>
              <button onClick={() => onDelete(movie.id)}>Удалить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;